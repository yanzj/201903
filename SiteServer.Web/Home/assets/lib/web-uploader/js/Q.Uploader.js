//devin87@qq.com
//build:2017/12/04 15:05:00
!function(t,e){"use strict";function i(t,e){var i=t.lastIndexOf(e);return-1!=i?t.slice(i):""}function s(t){if(t){for(var e=t.split(","),i={},s=0,a=e.length;s<a;s++)i[e[s]]=!0;return i}}function a(t){this.guid=t.guid||"uploader"+ ++S,this.url=t.url,this.dataType=t.dataType||"json",this.data=t.data,this.targets=t.target||[],this.targets.forEach||(this.targets=[this.targets]),this.target=this.targets[0],this.html5=T&&!!r(t.html5,!0),this.multiple=w&&this.html5&&!!r(t.multiple,!0),this.clickTrigger=k&&!!r(t.clickTrigger,!0),this.workerThread=this.html5?t.workerThread||1:1,this.workerIdle=this.workerThread,this.auto=!1!==t.auto,this.upName=t.upName||"upfile",this.allows=s(t.allows),this.disallows=s(t.disallows),this.maxSize=+t.maxSize||0,this.chunkSize=t.chunkSize||2097152,this.isSlice=!!t.isSlice,this.isQueryState=!!r(t.isQueryState,this.isSlice),this.isMd5=!!r(t.isMd5,this.isSlice),this.isUploadAfterHash=!1!==t.isUploadAfterHash,this.container=t.container||document.body,t.getPos&&(this.getPos=t.getPos);var e=t.UI||{};e.init&&(this.init=e.init),e.draw&&(this.draw=e.draw),e.update&&(this.update=e.update),e.over&&(this.over=e.over),this.fns=t.on||{},this.ops=t,this.list=[],this.map={},this.index=0,this.started=!1,this._init()}var r=Q.def,n=Q.fire,o=Q.extend,u=Q.getFirst,l=Q.getLast,d=JSON.parse,h=Q.createEle,c=Q.parseHTML,p=Q.setOpacity,f=Q.getOffset,m=Q.md5File,v=Q.event,g=v.add,_=v.trigger,y=v.stop,T=!1,w=!1,k=!1,S=0,x=0,I=0,E=0,L=1,b=2,z=-1,M=-2,N=-3;a.prototype={constructor:a,_init:function(){var t=this;if(!t._inited){t._inited=!0;var e=t.guid,i=t.container,s=h("div","upload-input "+e);if(i.appendChild(s),t.boxInput=s,!t.html5){var a="upload_iframe_"+e,r=h("div","upload-html4 "+e,'<iframe class="u-iframe" name="'+a+'"></iframe><form class="u-form" action="" method="post" enctype="multipart/form-data" target="'+a+'"></form>');i.appendChild(r);var n=u(r),o=l(r);t.iframe=n,t.form=o,function(t,e){t.attachEvent?t.attachEvent("onload",e):t.addEventListener("load",e,!1)}(n,function(){if(0==t.workerIdle){var e;try{e=n.contentWindow.document.body.innerHTML}catch(t){}t.complete(void 0,b,e)}})}return t.targets.forEach(function(e){t.clickTrigger?g(e,"click",function(e){!1!==t.fire("select",e)&&(t.resetInput(),_(t.inputFile,"click"))}):g(e,"mouseover",function(e){t.target=this,t.updatePos()})}),t.clickTrigger||(g(s,"click",function(e){!1===t.fire("select",e)&&y(e)}),p(s,0),t.resetInput()),t.fire("init"),t.run("init")}},resetInput:function(){var t=this,e=t.boxInput;e.innerHTML='<input type="file" name="'+t.upName+'" style="'+(t.clickTrigger?"visibility: hidden;":"font-size:100px;")+'"'+(t.multiple?' multiple="multiple"':"")+">";var i=u(e);return g(i,"change",function(e){t.add(this),t.html5||t.resetInput()}),t.inputFile=i,t.updatePos()},updatePos:function(t){if(this.clickTrigger)return this;var e=this.getPos||f,i=this.boxInput,s=u(i),a=this.target,r=a.offsetWidth,n=a.offsetHeight,o=0==r?{left:-1e4,top:-1e4}:e(a);return i.style.width=s.style.width=r+"px",i.style.height=s.style.height=n+"px",i.style.left=o.left+"px",i.style.top=o.top+"px",t&&(i.style.zIndex=++I),this},fire:function(t,e,i){if(!i)return n(this.fns[t],this,e);var s=this.fns[t+"Async"];if(s)return n(s,this,e,i);i(n(this.fns[t],this,e))},run:function(t,e){var i=this[t];return i&&n(i,this,e),this},addTask:function(t,e){if(t||e){var s,a;e?(s=e.name||e.fileName,a=e.size||e.fileSize):(s=i(t.value,"\\").slice(1)||t.value,a=-1);var r,n=this,o=i(s,".").toLowerCase();n.disallows&&n.disallows[o]||n.allows&&!n.allows[o]?r="ext":-1!=a&&n.maxSize&&a>n.maxSize&&(r="size");var u={id:++x,name:s,ext:o,size:a,input:t,file:e,state:r?z:E};return r&&(u.limited=r,u.disabled=!0),n.fire("add",u,function(t){!1===t||u.disabled||u.limited||(u.index=n.list.length,n.list.push(u),n.map[u.id]=u,n.run("draw",u),n.auto&&n.start())}),u}},add:function(t){if("INPUT"==t.tagName){var e=t.files;if(e)for(var i=0,s=e.length;i<s;i++)this.addTask(t,e[i]);else this.addTask(t)}else this.addTask(void 0,t)},addList:function(t){for(var e=0,i=t.length;e<i;e++)this.add(t[e])},get:function(t){if(void 0!=t)return this.map[t]},cancel:function(t,e){var i=this.get(t);if(i){var s=i.state;if(s!=E&&s!=L)return this;if(s==L){var a=i.xhr;if(a)return a.abort(),this;this.iframe.contentWindow.location="about:blank"}return e?this:this.complete(i,M)}},remove:function(t){var e=this.get(t);e&&(e.state==L&&this.cancel(t),e.deleted=!0,this.fire("remove",e))},start:function(){var t=this.workerIdle,e=this.list,i=this.index,s=e.length;if(this.started||(this.started=!0),s<=0||i>=s||t<=0)return this;var a=e[i];return this.index++,this.upload(a)},upload:function(t){var e=this;return!t||t.state!=E||t.skip?e.start():(t.url=e.url,e.workerIdle--,e.fire("upload",t,function(i){if(!1===i)return e.complete(t,z);e.html5&&t.file?e._upload_html5_ready(t):t.input?e._upload_html4(t):e.complete(t,z)}),e)},queryState:function(t,e){var i=this,s=i.url,a=new XMLHttpRequest;return t.queryUrl=s+(-1==s.indexOf("?")?"?":"&")+"action=query&hash="+(t.hash||encodeURIComponent(t.name))+"&fileName="+encodeURIComponent(t.name),i.fire("sliceQuery",t),a.open("GET",t.queryUrl),a.onreadystatechange=function(){if(4==a.readyState){var s,r;if(a.status>=200&&a.status<400)if("ok"===(s=a.responseText)?r={ret:1}:s&&(r=d(s)),r&&"number"!=typeof r||(r={ret:0,start:r}),t.response=s,t.json=r,1==r.ret)t.queryOK=!0,i.cancel(t.id,!0).complete(t,b);else{var o=+r.start||0;o!=Math.floor(o)&&(o=0),t.sliceStart=o}n(e,i,a)}},a.onerror=function(){n(e,i,a)},a.send(null),i},_upload_html5_ready:function(t){var e=this,i=function(){t.state!=b&&(e.isSlice?e._upload_slice(t):e._upload_html5(t))},s=function(i){e.fire("hash",t,function(){t.hash&&e.isQueryState&&t.state!=b?e.queryState(t,i):i()})},a=function(i){if(e.isMd5&&m){var a=e.fns.hashProgress;m(t.file,function(e,a){t.hash=e,t.timeHash=a,s(i)},function(i){n(a,e,t,i)})}else s(i)};return e.isUploadAfterHash?a(i):(i(),a()),e},_process_params:function(t,e){this.data&&Object.forEach(this.data,e),t.data&&Object.forEach(t.data,e)},_upload_html5:function(t){var e=this,i=new XMLHttpRequest;t.xhr=i,i.upload.addEventListener("progress",function(i){e.progress(t,i.total,i.loaded)},!1),i.addEventListener("load",function(i){e.complete(t,b,i.target.responseText)},!1),i.addEventListener("error",function(){e.complete(t,N)},!1),i.addEventListener("abort",function(){e.complete(t,M)},!1);var s=new FormData;e._process_params(t,function(t,e){s.append(t,e)}),s.append("fileName",t.name),s.append(e.upName,t.blob||t.file,t.name),i.open("POST",t.url),e.fire("send",t,function(a){if(!1===a)return e.complete(t,z);i.send(s),e._afterSend(t)})},_upload_html4:function(t){var e=this,i=e.form,s=t.input;if(s._uploaded)return e.complete(t,b);s._uploaded=!0,s.name=e.upName,i.innerHTML="",i.appendChild(s),i.action=t.url,e._process_params(t,function(t,e){i.appendChild(c('<input type="hidden" name="'+t+'" value="'+e+'">'))}),e.fire("send",t,function(s){if(!1===s)return e.complete(t,z);i.submit(),e._afterSend(t)})},_afterSend:function(t){t.lastTime=t.startTime=Date.now(),t.state=L,this._lastTask=t,this.progress(t)},progress:function(t,e,i){e||(e=t.size),(!i||i<0)&&(i=0);var s=t.state||E;i>e&&(i=e),i>0&&s==E&&(t.state=s=L);s==b&&(e=i=t.size),function(t,e,i){if(e&&!(e<=0)){var s,a=Date.now();if(i>=e)return(s=a-t.startTime)?t.avgSpeed=Math.min(Math.round(1e3*e/s),e):t.speed||(t.avgSpeed=t.speed=e),t.time=s||0,void(t.endTime=a);(s=a-t.lastTime)<200||(t.speed=Math.min(Math.round(1e3*(i-t.loaded)/s),t.total),t.lastTime=a)}}(t,e,i),t.total=e,t.loaded=i,this.fire("progress",t),this.run("update",t)},_process_response:function(t,e){t.response=e,e&&"json"==this.dataType&&(t.json=d(e))},complete:function(t,e,i){return t||1!=this.workerThread||(t=this._lastTask),t&&(void 0!=e&&(t.state=e),t.state!=L&&e!=b||(t.state=b,this.progress(t,t.size,t.size)),void 0!==i&&this._process_response(t,i)),this.run("update",t).run("over",t),e==M&&this.fire("cancel",t),this.fire("complete",t),this.workerIdle++,this.started&&this.start(),this}},a.extend=function(t,e){o(a.prototype,t,e)},function(){var e=t.XMLHttpRequest;e&&(new e).upload&&t.FormData&&(T=!0);var i=document.createElement("input");i.type="file",w=!!i.files,k=T}(),o(a,{support:{html5:T,multiple:w},READY:E,PROCESSING:L,COMPLETE:b,SKIP:z,CANCEL:M,ERROR:N,UI:{},Lang:{status_ready:"准备中",status_processing:"上传中",status_complete:"已完成",status_skip:"已跳过",status_cancel:"已取消",status_error:"已失败"},getStatusText:function(t){var e=a.Lang;switch(t){case E:return e.status_ready;case L:return e.status_processing;case b:return e.status_complete;case z:return e.status_skip;case M:return e.status_cancel;case N:return e.status_error}return t}}),Q.Uploader=a}(window);