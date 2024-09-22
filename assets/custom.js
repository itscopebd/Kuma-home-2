$(function () {
	"use strict";

	//Loader	
	$(function preloaderLoad() {
		if ($('.preloader').length) {
			$('.preloader').delay(200).fadeOut(300);
		}
		$(".preloader_disabler").on('click', function () {
			$("#preloader").hide();
		});
	});

	// Script Navigation
	! function (n, e, i, a) {
		n.navigation = function (t, s) {
			var o = {
				responsive: !0,
				mobileBreakpoint: 992,
				showDuration: 300,
				hideDuration: 300,
				showDelayDuration: 0,
				hideDelayDuration: 0,
				submenuTrigger: "hover",
				effect: "fade",
				submenuIndicator: !0,
				hideSubWhenGoOut: !0,
				visibleSubmenusOnMobile: !1,
				fixed: !1,
				overlay: !0,
				overlayColor: "rgba(0, 0, 0, 0.5)",
				hidden: !1,
				offCanvasSide: "left",
				onInit: function () { },
				onShowOffCanvas: function () { },
				onHideOffCanvas: function () { }
			},
				u = this,
				r = Number.MAX_VALUE,
				d = 1,
				f = "click.nav touchstart.nav",
				l = "mouseenter.nav",
				c = "mouseleave.nav";
			u.settings = {};
			var t = (n(t), t);
			n(t).find(".nav-menus-wrapper").prepend("<span class='nav-menus-wrapper-close-button'>✕</span>"), n(t).find(".nav-search").length > 0 && n(t).find(".nav-search").find("form").prepend("<span class='nav-search-close-button'>✕</span>"), u.init = function () {
				u.settings = n.extend({}, o, s), "right" == u.settings.offCanvasSide && n(t).find(".nav-menus-wrapper").addClass("nav-menus-wrapper-right"), u.settings.hidden && (n(t).addClass("navigation-hidden"), u.settings.mobileBreakpoint = 99999), v(), u.settings.fixed && n(t).addClass("navigation-fixed"), n(t).find(".nav-toggle").on("click touchstart", function (n) {
					n.stopPropagation(), n.preventDefault(), u.showOffcanvas(), s !== a && u.callback("onShowOffCanvas")
				}), n(t).find(".nav-menus-wrapper-close-button").on("click touchstart", function () {
					u.hideOffcanvas(), s !== a && u.callback("onHideOffCanvas")
				}), n(t).find(".nav-search-button").on("click touchstart", function (n) {
					n.stopPropagation(), n.preventDefault(), u.toggleSearch()
				}), n(t).find(".nav-search-close-button").on("click touchstart", function () {
					u.toggleSearch()
				}), n(t).find(".megamenu-tabs").length > 0 && y(), n(e).resize(function () {
					m(), C()
				}), m(), s !== a && u.callback("onInit")
			};
			var v = function () {
				n(t).find("li").each(function () {
					n(this).children(".nav-dropdown,.megamenu-panel").length > 0 && (n(this).children(".nav-dropdown,.megamenu-panel").addClass("nav-submenu"), u.settings.submenuIndicator && n(this).children("a").append("<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"))
				})
			};
			u.showSubmenu = function (e, i) {
				g() > u.settings.mobileBreakpoint && n(t).find(".nav-search").find("form").slideUp(), "fade" == i ? n(e).children(".nav-submenu").stop(!0, !0).delay(u.settings.showDelayDuration).fadeIn(u.settings.showDuration) : n(e).children(".nav-submenu").stop(!0, !0).delay(u.settings.showDelayDuration).slideDown(u.settings.showDuration), n(e).addClass("nav-submenu-open")
			}, u.hideSubmenu = function (e, i) {
				"fade" == i ? n(e).find(".nav-submenu").stop(!0, !0).delay(u.settings.hideDelayDuration).fadeOut(u.settings.hideDuration) : n(e).find(".nav-submenu").stop(!0, !0).delay(u.settings.hideDelayDuration).slideUp(u.settings.hideDuration), n(e).removeClass("nav-submenu-open").find(".nav-submenu-open").removeClass("nav-submenu-open")
			};
			var h = function () {
				n("body").addClass("no-scroll"), u.settings.overlay && (n(t).append("<div class='nav-overlay-panel'></div>"), n(t).find(".nav-overlay-panel").css("background-color", u.settings.overlayColor).fadeIn(300).on("click touchstart", function (n) {
					u.hideOffcanvas()
				}))
			},
				p = function () {
					n("body").removeClass("no-scroll"), u.settings.overlay && n(t).find(".nav-overlay-panel").fadeOut(400, function () {
						n(this).remove()
					})
				};
			u.showOffcanvas = function () {
				h(), "left" == u.settings.offCanvasSide ? n(t).find(".nav-menus-wrapper").css("transition-property", "left").addClass("nav-menus-wrapper-open") : n(t).find(".nav-menus-wrapper").css("transition-property", "right").addClass("nav-menus-wrapper-open")
			}, u.hideOffcanvas = function () {
				n(t).find(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open").on("webkitTransitionEnd moztransitionend transitionend oTransitionEnd", function () {
					n(t).find(".nav-menus-wrapper").css("transition-property", "none").off()
				}), p()
			}, u.toggleOffcanvas = function () {
				g() <= u.settings.mobileBreakpoint && (n(t).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open") ? (u.hideOffcanvas(), s !== a && u.callback("onHideOffCanvas")) : (u.showOffcanvas(), s !== a && u.callback("onShowOffCanvas")))
			}, u.toggleSearch = function () {
				"none" == n(t).find(".nav-search").find("form").css("display") ? (n(t).find(".nav-search").find("form").slideDown(), n(t).find(".nav-submenu").fadeOut(200)) : n(t).find(".nav-search").find("form").slideUp()
			};
			var m = function () {
				u.settings.responsive ? (g() <= u.settings.mobileBreakpoint && r > u.settings.mobileBreakpoint && (n(t).addClass("navigation-portrait").removeClass("navigation-landscape"), D()), g() > u.settings.mobileBreakpoint && d <= u.settings.mobileBreakpoint && (n(t).addClass("navigation-landscape").removeClass("navigation-portrait"), k(), p(), u.hideOffcanvas()), r = g(), d = g()) : k()
			},
				b = function () {
					n("body").on("click.body touchstart.body", function (e) {
						0 === n(e.target).closest(".navigation").length && (n(t).find(".nav-submenu").fadeOut(), n(t).find(".nav-submenu-open").removeClass("nav-submenu-open"), n(t).find(".nav-search").find("form").slideUp())
					})
				},
				g = function () {
					return e.innerWidth || i.documentElement.clientWidth || i.body.clientWidth
				},
				w = function () {
					n(t).find(".nav-menu").find("li, a").off(f).off(l).off(c)
				},
				C = function () {
					if (g() > u.settings.mobileBreakpoint) {
						var e = n(t).outerWidth(!0);
						n(t).find(".nav-menu").children("li").children(".nav-submenu").each(function () {
							n(this).parent().position().left + n(this).outerWidth() > e ? n(this).css("right", 0) : n(this).css("right", "auto")
						})
					}
				},
				y = function () {
					function e(e) {
						var i = n(e).children(".megamenu-tabs-nav").children("li"),
							a = n(e).children(".megamenu-tabs-pane");
						n(i).on("click.tabs touchstart.tabs", function (e) {
							e.stopPropagation(), e.preventDefault(), n(i).removeClass("active"), n(this).addClass("active"), n(a).hide(0).removeClass("active"), n(a[n(this).index()]).show(0).addClass("active")
						})
					}
					if (n(t).find(".megamenu-tabs").length > 0)
						for (var i = n(t).find(".megamenu-tabs"), a = 0; a < i.length; a++) e(i[a])
				},
				k = function () {
					w(), n(t).find(".nav-submenu").hide(0), navigator.userAgent.match(/Mobi/i) || navigator.maxTouchPoints > 0 || "click" == u.settings.submenuTrigger ? n(t).find(".nav-menu, .nav-dropdown").children("li").children("a").on(f, function (i) {
						if (u.hideSubmenu(n(this).parent("li").siblings("li"), u.settings.effect), n(this).closest(".nav-menu").siblings(".nav-menu").find(".nav-submenu").fadeOut(u.settings.hideDuration), n(this).siblings(".nav-submenu").length > 0) {
							if (i.stopPropagation(), i.preventDefault(), "none" == n(this).siblings(".nav-submenu").css("display")) return u.showSubmenu(n(this).parent("li"), u.settings.effect), C(), !1;
							if (u.hideSubmenu(n(this).parent("li"), u.settings.effect), "_blank" == n(this).attr("target") || "blank" == n(this).attr("target")) e.open(n(this).attr("href"));
							else {
								if ("#" == n(this).attr("href") || "" == n(this).attr("href")) return !1;
								e.location.href = n(this).attr("href")
							}
						}
					}) : n(t).find(".nav-menu").find("li").on(l, function () {
						u.showSubmenu(this, u.settings.effect), C()
					}).on(c, function () {
						u.hideSubmenu(this, u.settings.effect)
					}), u.settings.hideSubWhenGoOut && b()
				},
				D = function () {
					w(), n(t).find(".nav-submenu").hide(0), u.settings.visibleSubmenusOnMobile ? n(t).find(".nav-submenu").show(0) : (n(t).find(".nav-submenu").hide(0), n(t).find(".submenu-indicator").removeClass("submenu-indicator-up"), u.settings.submenuIndicator ? n(t).find(".submenu-indicator").on(f, function (e) {
						return e.stopPropagation(), e.preventDefault(), u.hideSubmenu(n(this).parent("a").parent("li").siblings("li"), "slide"), u.hideSubmenu(n(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide"), "none" == n(this).parent("a").siblings(".nav-submenu").css("display") ? (n(this).addClass("submenu-indicator-up"), n(this).parent("a").parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), n(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"), u.showSubmenu(n(this).parent("a").parent("li"), "slide"), !1) : (n(this).parent("a").parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), void u.hideSubmenu(n(this).parent("a").parent("li"), "slide"))
					}) : k())
				};
			u.callback = function (n) {
				s[n] !== a && s[n].call(t)
			}, u.init()
		}, n.fn.navigation = function (e) {
			return this.each(function () {
				if (a === n(this).data("navigation")) {
					var i = new n.navigation(this, e);
					n(this).data("navigation", i)
				}
			})
		}
	}
		(jQuery, window, document), $(document).ready(function () {
			$("#navigation").navigation()
		});

	// Product Preview
	$('.sp-wrap').smoothproducts();

	// Range Slider Script
	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 100,
		to: 750,
		grid: true
	});

	// Tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// Snackbar for Add To Cart Product
	$('.snackbar-addcart').click(function () {
		Snackbar.show({
			text: 'Your product was added to cart successfully!',
			pos: 'top-right',
			showAction: false,
			actionText: "Dismiss",
			duration: 3000,
			textColor: '#fff',
			backgroundColor: '#151515'
		});
	});

	// Snackbar for wishlist Product
	$('.snackbar-wishlist').click(function () {
		Snackbar.show({
			text: 'Your product was added to wishlist successfully!',
			pos: 'top-right',
			showAction: false,
			actionText: "Dismiss",
			duration: 3000,
			textColor: '#fff',
			backgroundColor: '#151515'
		});
	});

	// Bottom To Top Scroll Script
	$(window).on('scroll', function () {
		var height = $(window).scrollTop();
		if (height > 100) {
			$('#back2Top').fadeIn();
		} else {
			$('#back2Top').fadeOut();
		}
	});


	// Script For Fix Header on Scroll
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$(".header").addClass("header-fixed");
		} else {
			$(".header").removeClass("header-fixed");
		}
	});

	// Brand-slide
	$('.smart-brand').slick({
		slidesToShow: 6,
		arrows: false,
		dots: false,
		infinite: true,
		autoplaySpeed: 2000,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: false,
					dots: false,
					slidesToShow: 4
				}
			},
			{
				breakpoint: 600,
				settings: {
					arrows: false,
					dots: false,
					slidesToShow: 3
				}
			}
		]
	});

	// reviews-slide
	$('.reviews-slide').slick({
		slidesToShow: 1,
		arrows: true,
		dots: false,
		infinite: true,
		autoplaySpeed: 2000,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: true,
					dots: false,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					arrows: true,
					dots: false,
					slidesToShow: 1
				}
			}
		]
	});



	// item Slide
	$('.slide_items').slick({
		slidesToShow: 4,
		arrows: true,
		dots: false,
		infinite: true,
		speed: 500,
		cssEase: 'linear',
		autoplaySpeed: 2000,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: true,
					dots: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					arrows: true,
					dots: false,
					slidesToShow: 1
				}
			}
		]
	});

	// Home Slider
	$('.home-slider').slick({
		centerMode: false,
		slidesToShow: 1,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					slidesToShow: 1
				}
			}
		]
	});

	// fullwidth home slider
	function inlineCSS() {
		$(".home-slider .item").each(function () {
			var attrImageBG = $(this).attr('data-background-image');
			var attrColorBG = $(this).attr('data-background-color');
			if (attrImageBG !== undefined) {
				$(this).css('background-image', 'url(' + attrImageBG + ')');
			}
			if (attrColorBG !== undefined) {
				$(this).css('background', '' + attrColorBG + '');
			}
		});
	}
	inlineCSS();

});




function formatMoney(cents, format) {
	if (typeof cents === 'string') cents = cents.replace('.', '');
	var value = '';
	var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
	var formatString = format || '${{amount}}';

	function defaultOption(opt, def) {
		return (typeof opt === 'undefined' ? def : opt);
	}

	function formatWithDelimiters(number, precision, thousands, decimal) {
		precision = defaultOption(precision, 2);
		thousands = defaultOption(thousands, ',');
		decimal = defaultOption(decimal, '.');

		if (isNaN(number) || number == null) return 0;

		number = (number / 100.0).toFixed(precision);

		var parts = number.split('.');
		var dollarsAmount = parts[0].replace(
			/(\d)(?=(\d\d\d)+(?!\d))/g,
			'$1' + thousands
		);
		var centsAmount = parts[1] ? (decimal + parts[1]) : '';

		return dollarsAmount + centsAmount;
	}

	switch (formatString.match(placeholderRegex)[1]) {
		case 'amount':
			value = formatWithDelimiters(cents, 2);
			break;
		case 'amount_no_decimals':
			value = formatWithDelimiters(cents, 0);
			break;
		case 'amount_with_comma_separator':
			value = formatWithDelimiters(cents, 2, '.', ',');
			break;
		case 'amount_no_decimals_with_comma_separator':
			value = formatWithDelimiters(cents, 0, '.', ',');
			break;
	}

	return formatString.replace(placeholderRegex, value);
}


$(".details__modal").on("click", function () {
	var product__id = $(this).attr("data-product-id");

	fetch(`/products/${product__id}.js`)
		.then(response => response.json())
		.then(product => {


			var images = '';
			product.images.forEach(img => {
				images += `<div class="single_view_slide"><img src="${img}" class="img-fluid" alt="${product.title}" /></div>`
			});
			let optionsHTML = '';
			let valuesHTML = ''; // Initialize outside the loop
			
			product.options.forEach(option => {
				// Add each option name to optionsHTML
				optionsHTML += `<p class="option-name">${option.name}</p>`;
				
				// Process values for the current option
				option.values.forEach((value, index) => {
					// Use a unique id for each radio button
					let uniqueId = `${option.name.replace(/ /g, '')}-${index}`;
					
					valuesHTML += `
						<div class="form-check form-option form-check-inline mb-1">
							<input class="form-check-input" type="radio" name="${option.name.replace(/ /g, '')}" id="${uniqueId}">
							<label class="form-option-label rounded-circle" for="${uniqueId}">
								<span class="form-option-color rounded-circle" style="background:${value};"></span>
							</label>
						</div>
					`;
				});
			});
			
			console.log(product)

			$(".modal-body").html(
				`
				
				<div class="quick_view_wrap">
        
                    <div class="quick_view_thmb">
                        <div class="quick_view_slide">
                           ${images}
                           
                        </div>
                    </div>
                    
                    <div class="quick_view_capt">
                        <div class="prd_details">
                            
                        
                            <div class="prt_02 mb-2">
                                <h2 class="ft-bold mb-1">${product.title}</h2>
                                <div class="text-left">
                                    <div class="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="small">(412 Reviews)</span>
                                    </div>
                                    <div class="elis_rty"><span class="ft-medium text-muted line-through fs-md mr-2">${product.compare_at_price > product.price ? formatMoney(product.compare_at_price) : ''}</span><span class="ft-bold theme-cl fs-lg mr-2">${formatMoney(product.price)}</span><span class="ft-regular text-danger bg-light-danger py-1 px-2 fs-sm">Out of Stock</span></div>
                                </div>
                            </div>
                            
                            <div class="prt_03 mb-3">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                            </div>
                            
                            <div class="prt_04 mb-2">
                               ${optionsHTML}
							     <div class="text-left">
                                         ${valuesHTML}
								</div>
                            </div>
                            
                            <div class="prt_04 mb-4">
                                <p class="d-flex align-items-center mb-0 text-dark ft-medium">Size:</p>
                                <div class="text-left pb-0 pt-2">
                                    <div class="form-check size-option form-option form-check-inline mb-2">
                                        <input class="form-check-input" type="radio" name="size" id="28" checked="">
                                        <label class="form-option-label" for="28">28</label>
                                    </div>
                                    <div class="form-check form-option size-option  form-check-inline mb-2">
                                        <input class="form-check-input" type="radio" name="size" id="30">
                                        <label class="form-option-label" for="30">30</label>
                                    </div>
                                    <div class="form-check form-option size-option  form-check-inline mb-2">
                                        <input class="form-check-input" type="radio" name="size" id="32">
                                        <label class="form-option-label" for="32">32</label>
                                    </div>
                                    <div class="form-check form-option size-option  form-check-inline mb-2">
                                        <input class="form-check-input" type="radio" name="size" id="34">
                                        <label class="form-option-label" for="34">34</label>
                                    </div>
                                    <div class="form-check form-option size-option  form-check-inline mb-2">
                                        <input class="form-check-input" type="radio" name="size" id="36">
                                        <label class="form-option-label" for="36">36</label>
                                    </div>
                                    <div class="form-check form-option size-option  form-check-inline mb-2">
                                        <input class="form-check-input" type="radio" name="size" id="38">
                                        <label class="form-option-label" for="38">38</label>
                                    </div>
                                    <div class="form-check form-option size-option  form-check-inline mb-2">
                                        <input class="form-check-input" type="radio" name="size" id="40">
                                        <label class="form-option-label" for="40">40</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="prt_05 mb-4">
                                <div class="form-row mb-7">
                                    <div class="col-12 col-lg-auto">
                                        <!-- Quantity -->
                                        <select class="mb-2 custom-select">
                                          <option value="1" selected="">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg">
                                        <!-- Submit -->
                                        <button type="submit" class="btn btn-block custom-height bg-dark mb-2">
                                            <i class="lni lni-shopping-basket mr-2"></i>Add to Cart 
                                        </button>
                                    </div>
                                    <div class="col-12 col-lg-auto">
                                        <!-- Wishlist -->
                                        <button class="btn custom-height btn-default btn-block mb-2 text-dark" data-toggle="button">
                                            <i class="lni lni-heart mr-2"></i>Wishlist
                                        </button>
                                    </div>
                              </div>
                            </div>
                            
                            <div class="prt_06">
                                <p class="mb-0 d-flex align-items-center">
                                  <span class="mr-4">Share:</span>
                                  <a class="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted mr-2" href="#!">
                                    <i class="fab fa-twitter position-absolute"></i>
                                  </a>
                                  <a class="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted mr-2" href="#!">
                                    <i class="fab fa-facebook-f position-absolute"></i>
                                  </a>
                                  <a class="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted" href="#!">
                                    <i class="fab fa-pinterest-p position-absolute"></i>
                                  </a>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
				
				
				`
			);
			initializeSlickSlider();
		});

	function initializeSlickSlider() {
		// // Destroy slick if already initialized
		// if ($('.quick_view_slide').hasClass('slick-initialized')) {
		// 	$('.quick_view_slide').slick('unslick');
		// }

		// Initialize slick slider
		$('.quick_view_slide').slick({
			slidesToShow: 1,
			arrows: true,
			dots: true,
			infinite: true,
			autoplaySpeed: 2000,
			autoplay: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						arrows: true,
						dots: true,
						slidesToShow: 1
					}
				}
			]
		});
	}


})