(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{uRA1:function(t,e,n){"use strict";n.r(e);var i=n("8++T"),a=n.n(i),l=(n("eROu"),n("lM69"),n("FvG+"),n("vn/0"),n("JAFY"),{props:["value","disabled","placeholder","name","height"],data:function(){return{editor:null}},watch:{disabled:function(t){this.editor.getBody().setAttribute("contenteditable",!t)}},mounted:function(){var t=this,e={target:this.$el.children[0],skin_url:"/css/skins/lightgray",plugins:"table charmap link lists",content_css:["//fonts.googleapis.com/css?family=Lato:300,300i,400,400i"],link_title:!1,charmap:[[643,"esh"],[353,"s (hacek)"],[269,"c (hacek)"],[952,"theta"],[331,"eng"],[638,"alveolar tap"],[240,"eth"],[660,"glottal stop"],[8709,"null"],[593,"script a"],[230,"ash"],[596,"open o"],[603,"epsilon"],[601,"schwa"],[769,"acute accent"],[768,"grave accent"],[770,"circumflex"],[774,"breve"],[772,"macron"],[771,"tilde"],[720,"IPA length symbol"],[183,"Algonquianist length symbol"]],toolbar:"undo redo | bold italic underline | link | charmap | bullist numlist outdent indent | table | clearformatting",menubar:!1,statusbar:!1,setup:function(e){e.on("change",(function(n){t.updateValue(e.getContent())})),e.on("input",(function(n){t.updateValue(e.getContent())})),e.on("click",(function(e){a.a.remove(t.$el.children[0])})),e.addButton("clearformatting",{image:"https://cdn4.iconfinder.com/data/icons/text-editor-3/100/Minio_Text_Editor_Bold-16-512.png",tooltip:"Clear Formatting",onclick:function(){var t=e.getContent({format:"raw"});t=(t=t.replace(/(?:<|<\/)(?!p|\/p|ul|\/ul|li|\/li|ol|\/ol)(?:.|\n)*?>/gm,"")).replace(/style=['"][^>]*['"]/gm,""),e.setContent(t)}})}};this.height&&(e.height=this.height),a.a.init(e).then((function(e){t.editor=e[0]}))},methods:{updateValue:function(t){this.$emit("input",t.trim())}}}),o=n("KHd+"),s=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control",class:{"mce-disabled":this.disabled}},[e("textarea",{staticClass:"textarea",attrs:{name:this.name,id:this.name,placeholder:this.placeholder,disabled:this.disabled},domProps:{value:this.value}})])}),[],!1,null,null,null);e.default=s.exports}}]);