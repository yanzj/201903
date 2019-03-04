﻿var $api = new utils.Api('/home/contentsLayerView');

Object.defineProperty(Object.prototype, 'getProp', {
  value: function (prop) {
    var key,
      self = this;
    for (key in self) {
      if (key.toLowerCase() == prop.toLowerCase()) {
        return self[key];
      }
    }
  }
});

var data = {
  siteId: parseInt(utils.getQueryString('siteId')),
  channelId: parseInt(utils.getQueryString('channelId')),
  contentId: parseInt(utils.getQueryString('contentId')),
  pageLoad: false,
  pageAlert: null,
  content: null,
  channelName: null,
  attributes: null
};

var methods = {
  loadConfig: function () {
    var $this = this;

    $api.get({
        siteId: $this.siteId,
        channelId: $this.channelId,
        contentId: $this.contentId
      },
      function (err, res) {
        if (err || !res || !res.value) return;

        $this.content = res.value;
        $this.channelName = res.channelName;
        $this.attributes = res.attributes;
        $this.pageLoad = true;
      }
    );
  }
};

new Vue({
  el: '#main',
  data: data,
  methods: methods,
  created: function () {
    this.loadConfig();
  }
});