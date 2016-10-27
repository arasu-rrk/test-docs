var selectedNodeUrl = "";

function expandTableOfContents(url) {
	var selectedNode = $(".treeview").find("a[href='"+ url +"']");
	
	var parentNodes = $(selectedNode).parents("li");
	
	var ejTree = $(".treeview").data("ejTreeView");

	for (var index = 0; index < parentNodes.length; index++) {
		ejTree.expandNode($(parentNodes)[index]);
	}
	
	ejTree.selectNode($(selectedNode));
}

//Image lazy load
function init() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-original')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-original'));
        }
    }
}
//PremaLink
function premalink() {
    return $("h2,h3").each(function(i, el) {
        var $el,
            icon,
            id;
        $el = $(el);
        id = $el.attr('id');
        icon = '<i class="fa fa-link"></i>';
        if (id) {
            return $el.append($("<a />").addClass("permalink").attr({
                href: "#" + id,
                title: "Permalink"
            }).html(icon));
        }
    });
}
// Expanding tree on page load
function onCreate(args) {
    var lastSegment = window.location.pathname;
	
    var hashUrl = location.hash;
    if (!(lastSegment.indexOf('api') === -1) && hashUrl != "" && hashUrl != undefined) {
        lastSegment = lastSegment + hashUrl;
    }

    $("ul > li a[href='" + lastSegment + "']").parents('ul').css('display', 'block');
    $("ul > li a[href='" + lastSegment + "']").closest('li').parents('li').children('div').children('div').removeClass('e-plus').addClass('e-minus');
    $("ul > li a[href='" + lastSegment + "']").closest('a').addClass('node-selected');

    var offsetval = $(".node-selected").offset();

    if (offsetval && (($(".node-selected").offset().top) > $(".left-toc").height())) {
        var scrollTopPosition = (($(".node-selected").offset().top) - ($(".left-toc").offset().top) - 100);
        $(".left-toc").animate({
            scrollTop: scrollTopPosition
        }, 800);
    }
}

function tabs() {
    $(".tabs li:first-child").addClass("active");
    $(".tabs div:first-child").addClass("active");
}

function onload() {
    languageTab();
    init();
    premalink();

    $(".highlight").each(function(index, el) {

        var textAreaId = "snippet-" + Math.random().toString().replace(".", "");

        var codeSnippet = $(el).find("pre").text();

        $(el).append("<textarea id='" + textAreaId + "' style='display: none'>" + codeSnippet + "</textarea>");

        $(el).prepend("<button id='copy-" + textAreaId + "'  class='copy-code' title='Copy code snippet' style='float:right'  data-clipboard-target='" + textAreaId + "'><i class='fa fa-files-o' ></i></button>");

        var copy = new ZeroClipboard($("#copy-" + textAreaId), {
            moviePath: "//cdn.syncfusion.com/documentation/flash/zeroclipboard.swf",
        });
    });

    var urlParameter = window.location.pathname.split('/');
}

//window.onload = onload;

$(document).on("change", "#site-language", function() {

    var urlParameter = window.location.pathname.split('/');

    window.location.href = "/" + $(this).val() + "/" + urlParameter.splice(2, urlParameter.length - 1).join("/");
});

$(document).ready(function() {

    $("#rightsidetoc").hover(function() {
        if ($('#rightsidetoc').height() > $(window).height()) {
            $('#rightsidetoc').css("height", $(window).height() - 100);
            $('#rightsidetoc').css("overflow-y", "scroll");
        }

    });


    // Back to top
    $("#back-top").css('visibility', 'hidden');
    if ($(window).width() > 767)

    {
        $(window).scroll(function() {

            var _rightSideToc = $("#rightsidetoc");

            var _scrollTop = $(window).scrollTop();

            if (_scrollTop < 300) {
                $("#back-top").css('visibility', 'hidden');
            } else {
                $("#back-top").css('visibility', 'visible');
            }

            if ((_scrollTop + $(window).height() > $(document).height() - 100) && (_rightSideToc.find("ol").innerHeight() > $(window).innerHeight() - 100)) {
                _rightSideToc.find("ol").css("margin-bottom", "70px");
            } else {
                _rightSideToc.find("ol").css("margin-bottom", "10px");
            }

            // RightTOC scroll highlighting

            var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());
            $('h2:visible').each(function(index) {
                if (windowTop > ($(this).position().top)) {
                    _rightSideToc.find('li.active').removeClass('active');
                    _rightSideToc.find('li:eq(' + index + ')').addClass('active');
                }
            });

            var _activeTopicPosition = _rightSideToc.find('li.active').position();

            if (_activeTopicPosition && (_activeTopicPosition.top > _rightSideToc.height())) {
                // _rightSideToc.animate({
                // scrollTop : _activeTopicPosition.top - _rightSideToc.height()
                // }, 800);
            }
        });
    }

    // Mobile View Right TOC
    if ($(window).width() < 767) {
        var rightTocObj = $('.right-toc-icon');
        rightTocObj.css("width", "50px");
        $('#rightsidetoc').fadeOut();
    }
});

// Tablet View Right TOC
if ($(window).width() < 1024 && $(window).width() > 767) {
    $(document).on("click", ".show-icon", function(event) {
        $('.right-toc-icon').css("width", "200px");
    });
}

// Mobile View Right TOC

if ($(window).width() < 767) {
    var rightTocIcon = $('.right-toc-icon');
    $(document).on("click", ".show-icon", function(event) {
        $('.right-toc-icon').css("width", "50px");
        $("#rightsidetoc").delay(100).fadeIn();
        rightTocIcon.find('.hide-icon').css("display", "block");
        rightTocIcon.find('.show-icon').css("display", "none");

    });
    $(document).on("click", ".hide-icon", function(event) {
        var rightTocIcon = $('.right-toc-icon');
        rightTocIcon.find('.hide-icon').css("display", "none");
        rightTocIcon.find('.show-icon').css("display", "block");
        $("#rightsidetoc").delay(100).fadeOut();

    });
}

// on browser back
window.onpopstate = function(event) {
    var url = window.location.pathname + window.location.hash;
    event.preventDefault();
    if ((url.indexOf('#') === -1) || !(url.indexOf('api') === -1)) {
        $("ul li a").removeClass("node-selected");
        $('.post').html("");
        $('.post').css('background', 'url(' + "http://cdn.syncfusion.com/documentation/images/left-toc-waiting.gif" + ') no-repeat scroll center center');
        $.ajax({
            type: "get",
            url: url + ".html",
            success: function(result) {
                $('.post').html($(result).find('.post').html()).css('background', 'none');
                $("#breadcrumb").html($(result).find('#breadcrumb').html());
                $('#rightsidetoc').toc();
                $('#rightsidetoc').toc({
                    noBackToTopLinks: true
                });
                $('#rightsidetoc').toc({
                    listType: 'ol'
                });
                $("#rightsidetoc ul:first").attr("id", "righttree");
                $('#rightsidetoc ol').length ? $("#rightsidetoc").css("display", "block") : $("#rightsidetoc").css("display", "none");
                $('#rightsidetoc ol').length ? $(".right-toc-icon").css("display", "block") : $(".right-toc-icon").css("display", "none");
                document.title = $(result).filter('title').text();
                onload();
            },
            complete: function() {
                scrollTopElement();
            }
        });
        var lastSegment = window.location.pathname;

        var hashUrl = location.hash;
        if (!(lastSegment.indexOf('api') === -1) && hashUrl != "" && hashUrl != undefined) {
            lastSegment = lastSegment + hashUrl;
        }

        $("ul > li a[href='" + lastSegment + "']").parents('ul').css('display', 'block');
        $("ul > li a[href='" + lastSegment + "']").closest('li').parents('li').children('div').children('div').removeClass('e-plus').addClass('e-minus');
        $("ul > li a[href='" + lastSegment + "']").closest('a').addClass('node-selected');

        var offsetval = $(".node-selected").offset();

        if (offsetval) {
            var scrollTopPosition = (($(".node-selected").offset().top) - ($(".left-toc").offset().top) - 100);
            $(".left-toc").animate({
                scrollTop: scrollTopPosition
            }, 800);

        }
    }
}


function createCookie(cookieName, cookieValue) {
    var d = new Date();
    if (cookieName != '_pageCount') {
        d.setMonth(d.getMonth() + 24);
        var expires = "expires=" + d.toUTCString();
    }
    document.cookie = cookieName + "=" + cookieValue + "; " + expires + "domain=.syncfusion.com;path=/";
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ')
            cookie = cookie.substring(1);
        if (cookie.indexOf(name) == 0)
            return cookie.substring(name.length, cookie.length);
    }
    return "";
}
$(document).on("click", "#back-top", function(event) {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
});

function scrollTopElement() {

    var url = window.location.pathname + window.location.hash;
    if (!(url.indexOf('#') === -1)) {
        var hashid = url.split('#')[1].replace(":", "\\:");
        $("body,html").scrollTop(($("#" + hashid).offset().top) - 120);
    }
}

// single click tree view node select

function onNodeSelect(args) {
    var tree = $('.treeview').data('ejTreeView');
    var element = $(args.currentElement);
	
	if (tree) {
		if (tree.isExpanded(element))
			tree.collapseNode(element);
		else
			tree.expandNode(element);
		element.find('.e-active').removeClass('e-active');
	}
}

function setSearchPopupHeight() {
    var viewPort = viewport();
    var popupHeight = (viewPort.height * 75) / 100;
    var PopupWidth = (viewPort.width * 65) / 100;
    var topPosition = (viewPort.height - popupHeight) / 2;
    var leftPosition = (viewPort.width - PopupWidth) / 2;

    if (viewPort.width < 992) {
        PopupWidth = (viewPort.width * 80) / 100;
        leftPosition = (viewPort.width - PopupWidth) / 2;
        $(".syncfusion-menu .search .gsc-results-wrapper-overlay").css({
            "height": popupHeight + "px",
            "top": topPosition + "px",
            "width": PopupWidth + "px",
            "left": leftPosition + "px"
        });
    } else {
        $(".syncfusion-menu .search .gsc-results-wrapper-overlay").css({
            "height": popupHeight + "px",
            "top": topPosition + "px",
            "width": PopupWidth + "px",
            "left": leftPosition + "px"
        });
    }
    $(".syncfusion-menu .search .gsc-modal-background-image").css({
        "height": viewPort.height + "px"
    });
}

function viewport() {
    if (typeof $.browser.safari != 'undefined' && $.browser.safari) {
        return {
            width: $(window).width(),
            height: $(window).height()
        };
    } else {
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
    }
}

$(window).load(function() {
    onload();
    $(".syncfusion-menu .search").css("display", "block");
    $(".search #gsc-i-id1").attr("placeholder", "Search");
    $(".search #gsc-i-id1").removeAttr("title");
    $(".search .gsc-search-button-v2").removeAttr("title");
    setSearchPopupHeight();
});

$(window).resize(function() {
    setSearchPopupHeight();
});

//Code snippet language tab selection
var platform = "";
$(document).on("click", ".tabs ul li", function(event) {
    platform = window.location.pathname.split("/")[1];
    var dataTarget = $(this).children().attr("data-original-lang")
    var cs_lang = dataTarget
    var window_Location = window.location.href;

    if (window_Location.match(/\?/) != null) {
        window_Location = window_Location.split("?")[0];
    } else if (window_Location.match(/#/) != null) {
        window_Location = window_Location.split("#")[0];
    }

    history.pushState({}, "", window_Location + "?cs-save-lang=1&cs-lang=" + cs_lang)
    tabSelect(cs_lang);
    createCookie(platform, cs_lang);
});

function languageTab() {
    var lang = "";
    platform = window.location.pathname.split("/")[1];
    var queryString = (function(qs) {

        if (qs == "") {
            if (getCookie(platform) == "" || getCookie(platform) == null) {
                tabs();
            } else {
                lang = getCookie(platform);
                tabSelect(lang)
                return;
            }
        }

        var querySelector = {};

        for (var i = 0; i < qs.length; ++i) {
            var queryValue = qs[i].split('=', 2);
            if (queryValue.length == 1)
                querySelector[queryValue[0]] = "";
            else
                querySelector[queryValue[0]] = decodeURIComponent(queryValue[1].replace(/\+/g, " "));
        }

        return querySelector;

    })(window.location.search.substr(1).split('&'));

    if (queryString != null) {
        if (queryString['cs-lang'] != null && queryString['cs-save-lang'] != null) {
            if (queryString['cs-save-lang'] == 1) {
                lang = queryString['cs-lang'];
                createCookie(platform, lang);
            } else if (queryString['cs-save-lang'] == 0) {
                lang = queryString['cs-lang'];
            }
        } else if (queryString['cs-save-lang'] != null) {
            if (getCookie(platform) != "" || getCookie(platform) != null) {
                lang = getCookie(platform);
            }
        } else if (queryString['cs-lang'] != null) {
            lang = queryString['cs-lang'];
        }
    }

    tabSelect(lang);

}

function tabSelect(lang) {

    if (lang == null || lang == "") {
        tabs();
        return;
    }
    $(".tabs").each(function(index, element) {
        var langArray = new Array();
        $("#" + $(element).attr("id") + " ul li a").each(function() {
            langArray.push($(this).attr('data-original-lang'))
        })
        if (jQuery.inArray(lang, langArray) !== -1) {
            $('#' + $(element).attr("id") + ' a[data-original-lang="' + lang + '"]').tab("show")
        } else {
            $('#' + $(element).attr("id") + ' a:first').tab('show')
        }
    })
}

function DropdownRefresh(selected)
{
	if($("#no-change").length>0)
	{
		// var ua = window.navigator.userAgent;
		// var msie = ua.indexOf("Trident/");
		// if (msie > 0) // If Internet Explorer, return version number
		// {
			// document.getElementById("no-change").removeNode();
		// }
		//else{
			var nochangediv = document.getElementById("no-change");
                    nochangediv.parentNode.removeChild(nochangediv);
		//}
	}
	if(selected == null || selected == ""){
		selected = "all";
	}
	ReleaseNotesSelction(selected);
	history.pushState({}, "", window.location.pathname + "?type=" + selected + window.location.hash);
	var $div = $("a[value="+selected+"]").parent().parent().parent(); 
	var $btn = $div.find('button');
	$btn.html("<span class=\"selected\">"+$("a[value="+selected+"]").text() + '</span> <span class="caret"></span>');
	$div.removeClass('open');
	$('#rightsidetoc').toc({
		listType : 'ol',
		headers	 : "h2:visible",
		minimumHeaders:1
	});
	$("#rightsidetoc").removeClass("hide");
	if($(".post-content h2:visible").length<=0){
		if(selected == "all"){
			selected = "Changes";
		}
		$(".post-content").append("<div id='no-change' class='alert alert-info'>No "+selected+" for this product in this version.</div>");
		$("#rightsidetoc").addClass("hide");
	}
	return false;
}

$(document).on("click", ".dropdown-menu li a", function (event) {
	event.preventDefault();
	var selected = $(this).attr("value");
	DropdownRefresh(selected);
});


function ReleaseNotesSelction(selected) {
	$("h2").removeClass("hide");
	var isBugFixes = false;
	var isFeatures = false;
	var isBreakingChng = false;
	var isKnowIssues = false;
	var elements = $('div.post-content').children();
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].id.indexOf("bug") >= 0) {
			isBugFixes = true;
			isFeatures = false;
			isBreakingChng = false;
			isKnowIssues = false;
		} else if (elements[i].id.indexOf("feature") >= 0) {
			isBugFixes = false;
			isFeatures = true;
			isBreakingChng = false;
			isKnowIssues = false;
		} else if (elements[i].id.indexOf("break") >= 0) {
			isBugFixes = false;
			isFeatures = false;
			isBreakingChng = true;
			isKnowIssues = false;
		} else if (elements[i].id.indexOf("known") >= 0) {
			isBugFixes = false;
			isFeatures = false;
			isBreakingChng = false;
			isKnowIssues = true;
		}else if (elements[i].id.indexOf("behavior") >= 0) {
			$(elements[i]).addClass("hide");
			isBugFixes = false;
			isFeatures = false;
			isBreakingChng = false;
			isKnowIssues = false;
		}

		if (elements[i].localName.indexOf("h2") < 0 && elements[i].localName.indexOf("h1") < 0 && elements[i].className.indexOf("release-date") < 0) {
			if ((isBreakingChng || isFeatures || isKnowIssues) && selected == "bug-fixes") {
				$(elements[i]).addClass("hide");
			} else if ((isBreakingChng || isBugFixes || isKnowIssues) && selected == "features") {
				$(elements[i]).addClass("hide");
			} else if ((isBugFixes || isFeatures || isKnowIssues) && selected == "breaking-changes") {
				$(elements[i]).addClass("hide");
			} else if ((isBugFixes || isFeatures || isBreakingChng) && selected == "knownissues") {
				$(elements[i]).addClass("hide");
			} else {
				$(elements[i]).removeClass("hide");
			}

		}
	}
	var h2Elements =$( "h2" ) .filter(function( index ) { return !$(this).nextUntil("h2").is(":visible") }) 
	$(h2Elements).addClass("hide");
	
}

