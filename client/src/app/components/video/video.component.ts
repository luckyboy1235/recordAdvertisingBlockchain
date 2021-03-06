import { Component, AfterViewInit, Input } from '@angular/core';
import * as videojs from 'video.js';
import { AdvertisementService } from '../../services/advertisement.service'
import { Advertisement } from '../../models/Advertisement'
import '../../../../node_modules/videojs-contrib-ads/dist/videojs.ads.js'
var adRunNext = 0
var adInited = 0;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements AfterViewInit {

  constructor(private advertisementService: AdvertisementService) { }

  @Input('src') src: String

  ngAfterViewInit() {
    let player = videojs('example_video_1', {
      controls: true,
      autoplay: true,
      preload: true
    }, function () {
    })

    var self = this;
    // Register the component with Video.js, so it can be used in players.
    videojs.registerComponent('skipButton', SkipButton);

    player.on('readyforpreroll', () => {
      console.log('readyforpreroll');
      player.ads.startLinearAdMode();

      //get random advetisement
      self.advertisementService.getRandom().subscribe((data: Advertisement) => {
        player.src(data.url);
      })

      //trigger to remove spinner
      player.on('adplaying', function () {
        player.trigger('ads-ad-started');
      });

      // resume content when all your linear ads have finished
      player.on('adended', function () {
        console.log('adended');
        player.ads.endLinearAdMode();
        player.removeChild('skipButton', { text: 'Skip' });
      });
    })

    //show advetising every 15 minius
    player.on('timeupdate', function () {
      function shouldPlayAd(currentTime) {
        let time = currentTime - adRunNext;
        if (time >= 0) {
          return true;
        } else {
          return false;
        }
      }

      var currentTime = player.currentTime();
      console.log(currentTime);
      if (shouldPlayAd(currentTime)) {
        adRunNext = currentTime + 119;
        console.log('play ads');
        if (!adInited) {
          this.ads();
          adInited = 1;
        }

        player.trigger('adsready');
        player.addChild('skipButton', { text: 'Skip' });
      }
    });
  }
}


var ComponentVideoJS = videojs.getComponent('Component');

let SkipButton = videojs.extend(ComponentVideoJS, {
  constructor: function (player, options) {

    ComponentVideoJS.apply(this, arguments);
    //hidden skip button and ended advetisement
    this.on('click', function () {
      player.ads.endLinearAdMode()
      player.trigger('ads-ad-started');
      player.removeChild('skipButton');
    });
    if (options.text) {
      this.updateTextContent(options.text);
    }
  },

  createEl: function () {
    return videojs.createEl('div', {
      className: 'vjs-skip-button'
    });
  },

  updateTextContent: function (text) {
    if (typeof text !== 'string') {
      text = 'Title Unknown';
    }

    videojs.emptyEl(this.el());
    videojs.appendContent(this.el(), text);
  }
});
