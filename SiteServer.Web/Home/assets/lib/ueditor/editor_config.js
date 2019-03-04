! function () {
    function e(e, l) {
        return t(e || self.document.URL || self.location.href, l || s())
    }

    function s() {
        var e = document.getElementsByTagName("script");
        return e[e.length - 1].src
    }

    function t(e, s) {
        var t = s;
        return /^(\/|\\\\)/.test(s) ? t = /^.+?\w(\/|\\\\)/.exec(e)[0] + s.replace(/^(\/|\\\\)/, "") : /^[a-z]+:/i.test(s) || (e = e.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, ""), t = e + "" + s), l(t)
    }

    function l(e) {
        var s = /^[a-z]+:\/\//.exec(e)[0],
            t = null,
            l = [];
        for (e = e.replace(s, "").split("?")[0].split("#")[0], e = e.replace(/\\/g, "/").split(/\//), e[e.length - 1] = ""; e.length;) ".." === (t = e.shift()) ? l.pop() : "." !== t && l.push(t);
        return s + l.join("/")
    }
    var a = window.UEDITOR_HOME_URL || e();
    window.UEDITOR_CONFIG = {
        UEDITOR_HOME_URL: a,
        serverUrl: window.UEDITOR_CONTROLLER_URL,
        toolbars: [
            ["fullscreen",
                "source",
                "|",
                "undo",
                "redo",
                "|",
                "bold",
                "italic",
                "underline",
                "fontborder",
                "strikethrough",
                "superscript",
                "subscript",
                "removeformat",
                "formatmatch",
                "autotypeset",
                "blockquote",
                "pasteplain",
                "|",
                "forecolor",
                "backcolor",
                "insertorderedlist",
                "insertunorderedlist",
                "selectall",
                "cleardoc",
                "|",
                "rowspacingtop",
                "rowspacingbottom",
                "lineheight",
                "|",
                "customstyle",
                "paragraph",
                "fontfamily",
                "fontsize",
                "|",
                "directionalityltr",
                "directionalityrtl",
                "indent",
                "|",
                "justifyleft",
                "justifycenter",
                "justifyright",
                "justifyjustify",
                "|",
                "touppercase",
                "tolowercase",
                "|",
                "link",
                "unlink",
                "anchor",
                "|",
                "imagenone",
                "imageleft",
                "imageright",
                "imagecenter",
                "|",
                "emotion",
                "scrawl",
                "attachment",
                "map",
                "insertframe",
                "insertcode",
                "template",
                "background",
                "|",
                "horizontal",
                "date",
                "time",
                "spechars",
                "wordimage",
                "|",
                "inserttable",
                "deletetable",
                "insertparagraphbeforetable",
                "insertrow",
                "deleterow",
                "insertcol",
                "deletecol",
                "mergecells",
                "mergeright",
                "mergedown",
                "splittocells",
                "splittorows",
                "splittocols",
                "charts",
                "|",
                "print",
                "preview",
                "searchreplace",
                "pagebreak"
            ]
        ],
        initialFrameHeight: 320,
        enableAutoSave: !1,
        saveInterval: 9999999999999,
        allHtmlEnabled: !1,
        pageBreakTag: "[SITESERVER_PAGE]",
        xssFilterRules: false,
        inputXssFilter: false,
        outputXssFilter: false,
        whitList: {
            a: ["target", "href", "title", "class", "style", "name"],
            abbr: ["title", "class", "style"],
            address: ["class", "style"],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: ["autoplay", "controls", "loop", "preload", "src", "class", "style"],
            b: ["class", "style"],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite", "class", "style"],
            br: [],
            caption: ["class", "style"],
            center: [],
            cite: [],
            code: ["class", "style"],
            col: ["align", "valign", "span", "width", "class", "style"],
            colgroup: ["align", "valign", "span", "width", "class", "style"],
            dd: ["class", "style"],
            del: ["datetime"],
            details: ["open"],
            div: ["class", "style"],
            dl: ["class", "style"],
            dt: ["class", "style"],
            em: ["class", "style"],
            font: ["color", "size", "face"],
            footer: [],
            h1: ["class", "style"],
            h2: ["class", "style"],
            h3: ["class", "style"],
            h4: ["class", "style"],
            h5: ["class", "style"],
            h6: ["class", "style"],
            header: [],
            hr: [],
            i: ["class", "style"],
            img: ["src", "alt", "title", "width", "height", "id", "_src", "_url", "loadingclass", "class", "data-latex", "word_img", "style", "anchorname"],
            ins: ["datetime"],
            li: ["class", "style"],
            mark: [],
            nav: [],
            ol: ["class", "style"],
            p: ["class", "style"],
            pre: ["class", "style"],
            s: [],
            section: [],
            small: [],
            span: ["class", "style"],
            sub: ["class", "style"],
            sup: ["class", "style"],
            strong: ["class", "style"],
            table: ["width", "border", "align", "valign", "class", "style"],
            tbody: ["align", "valign", "class", "style"],
            td: ["width", "rowspan", "colspan", "align", "valign", "class", "style"],
            tfoot: ["align", "valign", "class", "style"],
            th: ["width", "rowspan", "colspan", "align", "valign", "class", "style"],
            thead: ["align", "valign", "class", "style"],
            tr: ["rowspan", "align", "valign", "class", "style"],
            tt: [],
            u: [],
            ul: ["class", "style"],
            video: ["autoplay", "controls", "loop", "preload", "src", "height", "width", "class", "style"],
            source: ["src", "type"],
            embed: ["type", "class", "pluginspage", "src", "width", "height", "align", "style", "wmode", "play", "loop", "menu", "allowscriptaccess", "allowfullscreen"]
        }
    }, window.UE = {
        getUEBasePath: e
    }
}();