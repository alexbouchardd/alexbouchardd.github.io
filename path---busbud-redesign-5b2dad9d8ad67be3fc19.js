webpackJsonp([99759139122568],{322:function(e,a){e.exports={data:{markdownRemark:{html:'<p><a href="busbud.com">Busbud.com</a> is an intercity Bus OTA that sells bus tickets online in 63 countries on a million + routes. As part of the ongoing effort of improving the website experience, I redesigned the core funnel on mobile web and desktop.</p>\n<h1 class="w-100 text-center my-7">\n  A design system isn\'t about looks, it about solving the problems you commonly run into in a systematic, intuitive and consistent manner.\n</h1>\n<p>In Busbud\'s case: address a couple of creeping UX &#x26; technical issues that Busbud was facing.</p>\n<ol>\n<li>Improve the mobile experience, conversation rates and satisfaction.</li>\n<li>Revisit the website navigation to better align with user\'s intention to navigate between pages of the funnel.</li>\n<li>Implement a solid component based design system to increase consistency, speed up the design process and front-end development.</li>\n<li>Create a design system that would align with our future development goals.</li>\n</ol>\n<h2>Design</h2>\n<p>Busbud\'s redesign was data driven since the company has built solid event tracking. Most decisions were driven by explicit behaviour we could witness. For instance, Busbud features breadcrumbs for the 3 steps on the funnel (Search, Select, Pay). However those breadcrumbs were not clickable but were getting clicked on almost constantly by users trying to navigate between pages. I embraced the behaviour and made the breadcrumbs the center piece of the navigation bar while also making them clickable. They became the #1 way to navigation the platform.</p>\n<h4>Before</h4>\n\n  <a class="gatsby-resp-image-link" href="/static/old_nav-e5f0b874bddde1b1bc5d8721c27511dc-ef3f1.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 788px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 10.55133079847909%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAiUlEQVQI12Pgrj3+X7t933+1niv/+RvO/mepOvWfrfo0EJ9CwlB+DZCuOfOfo/bMf976s//56s/856s7/Z+j5tR/XiAN0ssgaeHzX9/V87+hq/d/dUe//5peqUCc/F/LOxWIU8A0mO+V8l/VNf6/ikvsf1Uo1vJI/G8RlvvfJDj7v2V43n9toHoAhdBS01PGbJkAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="old nav" title="" src="/static/old_nav-e5f0b874bddde1b1bc5d8721c27511dc-e1ac5.png" srcset="/static/old_nav-e5f0b874bddde1b1bc5d8721c27511dc-64618.png 197w,\n/static/old_nav-e5f0b874bddde1b1bc5d8721c27511dc-9c95c.png 394w,\n/static/old_nav-e5f0b874bddde1b1bc5d8721c27511dc-e1ac5.png 788w,\n/static/old_nav-e5f0b874bddde1b1bc5d8721c27511dc-deccc.png 1182w,\n/static/old_nav-e5f0b874bddde1b1bc5d8721c27511dc-6c75d.png 1576w,\n/static/old_nav-e5f0b874bddde1b1bc5d8721c27511dc-ef3f1.png 2104w" sizes="(max-width: 788px) 100vw, 788px">\n    </span>\n  </span>\n  \n  </a>\n    \n<br>\n<h4>After</h4>\n\n  <a class="gatsby-resp-image-link" href="/static/new_nav-d979df39493f2099b80b3d46dbe6b8b0-ebece.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 788px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 5.794205794205795%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAADeko4lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQI12NwrVj237lux3+7uv3/Tcp3/Ter2P3fqHTnf1MgG8TXLdrxX6dwO5iGYRDfsmoPWK1F5W6wOtvavf8NSnb+BwB3US++Qc5WNQAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="new nav" title="" src="/static/new_nav-d979df39493f2099b80b3d46dbe6b8b0-e1ac5.png" srcset="/static/new_nav-d979df39493f2099b80b3d46dbe6b8b0-64618.png 197w,\n/static/new_nav-d979df39493f2099b80b3d46dbe6b8b0-9c95c.png 394w,\n/static/new_nav-d979df39493f2099b80b3d46dbe6b8b0-e1ac5.png 788w,\n/static/new_nav-d979df39493f2099b80b3d46dbe6b8b0-ebece.png 1001w" sizes="(max-width: 788px) 100vw, 788px">\n    </span>\n  </span>\n  \n  </a>\n    \n<br>\n<p>Moreover, the endgame was a fully developed design system that would be both usable within Sketch and on the frontend. The result was a set of components (symbols) that were integrated in Sketch as Symbol and in code with \'Busbud Bootstrap\' an implementation of the popular css framework specific to Busbud that supported all our components.</p>\n<p>Below are some screenshot from the final product, head to <a href="busbud.com">busbud.com</a> for more.</p>\n\n  <a class="gatsby-resp-image-link" href="/static/results_desktop-35cf25f4256383ef482c353e507e2031-f5236.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 788px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 63.38615512927439%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACiklEQVQ4y21Sy04UURDtX3HjwggiEnRhFEM0+B9uXGgMogIqMYoouNeVSxRDeBgJ8ogmyIzMMIxsNGoI8pAZxqF7evp1+z3HqksTIFrpk6o+9/a5Vee2crx9Go03J9DaPYK2xymc7/mIxlszaOiYRnPnLBpvz8jM78duvJeoa5+SXNOdWZyi9dNU1xPHvNJ0L4Xm+2m0DSzh8kAOrX1ZXHq6iHOPMqjr/IT6rnmc6Erh5N0ULhLf1p+T6y29GZx9uIALT5bQ0pfHmQcZsJZytGMODd0pvEmvYzK/hYnlMsYXCxhOr2E8t40xwuDcKoZS6xjNbBI28DZXoLUi3uWLGHzeh+FnV3Gl5wWOdCxAGUpvYCz7G59/lPFlVcOW6uBXycRaycDmjo1SxUFRtVDUbBQoF5K6SPx2xcb6tyw28tOYzy7jVXoLCmIfQID0TxWZFQ2266NieTCcQOYoioBaTE90CDFn4jk83sJ1zYdi2g4Y9EbgTTVEYYAwCHgXojiWojLvIYpJMIbneXAcB3EUwnU9mJYNhQlXCHh+AEsKA5WKju3SH5lVVYOu61IAybF8KAfvr+iGrIMglOJSUJDg3iYO7iigDnW9KsVM09wd/UDUogC10EUtcIHQg++Kw4LcPmchXPnxwQO4jpPRLceDTdpG/jXKI9ehzfRSvobq10kIP94XDMMQYdKZcF3yxJW17/sScp3gM0fjBcKCqJZh6zvwLRWubcAhnV0PyVDLMiFoPI6qYUjvuFubfHIcgf+FZVlQNS3xMDg8shwz8Yk78agrVVWxQ2AvmTvg4D9VQHfm2Pa+oE+3zD7yqPyx/H34d0nAHjJnCV966Hyfgv6hH0bmpczmyjyEF+IvXV6iJr8HFSoAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="results desktop" title="" src="/static/results_desktop-35cf25f4256383ef482c353e507e2031-e1ac5.png" srcset="/static/results_desktop-35cf25f4256383ef482c353e507e2031-64618.png 197w,\n/static/results_desktop-35cf25f4256383ef482c353e507e2031-9c95c.png 394w,\n/static/results_desktop-35cf25f4256383ef482c353e507e2031-e1ac5.png 788w,\n/static/results_desktop-35cf25f4256383ef482c353e507e2031-deccc.png 1182w,\n/static/results_desktop-35cf25f4256383ef482c353e507e2031-6c75d.png 1576w,\n/static/results_desktop-35cf25f4256383ef482c353e507e2031-a1df5.png 2364w,\n/static/results_desktop-35cf25f4256383ef482c353e507e2031-f5236.png 2398w" sizes="(max-width: 788px) 100vw, 788px">\n    </span>\n  </span>\n  \n  </a>\n    \n<br>\n\n  <a class="gatsby-resp-image-link" href="/static/dep_card_desktop-1ea6a2df73c252aafdba3d906c86a229-f5236.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 788px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 67.05587989991659%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAByUlEQVQ4y32T227bMAyG+/YbdrX32QZsdwNWbOiKpQiWNG6bOD7PsSXLOvkfJVeuUwclQNA2hc/kT/GKc46u62CMgdYG1lpIKaGU8t/ectn30znHcKyrAFRK++gszwvkRYG2bfGvrsEYx2sbhgFZlqNlzL8vgK4yd8iZ1ho9VVmWpQc2TeNzPv985gzugeIcaIz1VUrZT/ClW2gLCN6g/vYR1ad3qD6/R/XlA1iVoBPyBVgVKQpqU5KOl2AYxjYtRWs0VLmDzDdQBcXiHh1rwInjgZyThl1FYAYuzZlOIc4lmZtUDMpICNGPLQcxGUHr0wmG9AuQAHAwPtM5tD9YuhVGeZ+GEh7cH9wVeC12AFi7rC6Yyy2m7Caa0nWpqhoZaSkEp2r7qZoiT5GmKV2pDGWRQYkWWnZTfgbsaDodnuJb7HYrRJs1/v7+hSS6IV9BPUuQPa6wvfuJP9ffsb3+inj7Aw/RGtqMQ1xUeKS/p4d7nLIIx8OG/A5ZEvstcM0m+wjxwxpP+wMeox328R7H5Ej6GS/OAtgwAda96DjMJu1cKFq3CzK6nNIXVo/RCjU0ZbcVDuq2ResQNVU6Rpcb88rL4b65Cx2A/wFwR/ADI2L6egAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="dep card desktop" title="" src="/static/dep_card_desktop-1ea6a2df73c252aafdba3d906c86a229-e1ac5.png" srcset="/static/dep_card_desktop-1ea6a2df73c252aafdba3d906c86a229-64618.png 197w,\n/static/dep_card_desktop-1ea6a2df73c252aafdba3d906c86a229-9c95c.png 394w,\n/static/dep_card_desktop-1ea6a2df73c252aafdba3d906c86a229-e1ac5.png 788w,\n/static/dep_card_desktop-1ea6a2df73c252aafdba3d906c86a229-deccc.png 1182w,\n/static/dep_card_desktop-1ea6a2df73c252aafdba3d906c86a229-6c75d.png 1576w,\n/static/dep_card_desktop-1ea6a2df73c252aafdba3d906c86a229-a1df5.png 2364w,\n/static/dep_card_desktop-1ea6a2df73c252aafdba3d906c86a229-f5236.png 2398w" sizes="(max-width: 788px) 100vw, 788px">\n    </span>\n  </span>\n  \n  </a>\n    \n<br>\n\n  <a class="gatsby-resp-image-link" href="/static/checkout_desktop-72b229994a2e1927765d7a776dc63e3f-f5236.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 788px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 67.05587989991659%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACCUlEQVQ4y31S227TQBD19yAClVoQiAeKBKjfQwspooKXcvsZ3iKKo1DaqhK0iEILfABqGsU2Tuzd9W1tH2bWXRMUwNLR7szOOXtmx05n1cXiWg/L669w/dE2bj5+i5XNXdzYGODqeh8Lay4urb5p0SFw/kq3j8UHfSx1G3TubZlz52J3F5cf7uHui0Msb77HracfsPLyANee7OPC/R3w+Sw6Zt3D0sY+7jw/wO1nxCHeAmnwufP60xBbR0MMjs/gHp3C/TzEu28eBice3OMx+jNwv4ypdoTex1P0Dn8QZ4Sd7z62v3L+DKzloMzAUPEEYvoTOpX471drKpdI5ZS22e98lRsdR0gFxmjsYTKNIFWCWBAhy5HlxR/IC035rK2rSafQJVSSmph1HKUU0jSlZALP8wg+4jj+p8GiKOAHgeEYw3UNQQYS4rOWEeSACwIqDMMQUkpTWFVVi7KsoDJt3Ph+QI7YSIZIThBMvXlBFhEEremNytKsjMKu1K5KCyQkIqiDKIpMJzKRJB7PC4bhxLSr6U3YHcO2ZN2WpTYtRzFdrlJzWV01Z3OCQgjjkgn2y2kQNmbXeU6DomFFQlGriRkUn3N+TjCj6WkimT+AbmRXnOO3tbEdSpLQ+50LzIJ1WkG+pTwXtGR+dHZtBRks2AgkhjeL1iGjaadxxHsmcszgvQXH1sTfBH8B1IiyeHf2iucAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="checkout desktop" title="" src="/static/checkout_desktop-72b229994a2e1927765d7a776dc63e3f-e1ac5.png" srcset="/static/checkout_desktop-72b229994a2e1927765d7a776dc63e3f-64618.png 197w,\n/static/checkout_desktop-72b229994a2e1927765d7a776dc63e3f-9c95c.png 394w,\n/static/checkout_desktop-72b229994a2e1927765d7a776dc63e3f-e1ac5.png 788w,\n/static/checkout_desktop-72b229994a2e1927765d7a776dc63e3f-deccc.png 1182w,\n/static/checkout_desktop-72b229994a2e1927765d7a776dc63e3f-6c75d.png 1576w,\n/static/checkout_desktop-72b229994a2e1927765d7a776dc63e3f-a1df5.png 2364w,\n/static/checkout_desktop-72b229994a2e1927765d7a776dc63e3f-f5236.png 2398w" sizes="(max-width: 788px) 100vw, 788px">\n    </span>\n  </span>\n  \n  </a>\n    \n<br>\n<div style="max-width: 400px;">\n  \n  <a class="gatsby-resp-image-link" href="/static/search_results-e3aa20e251b624eb3f8d664693f884de-410e4.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 752px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 177.6595744680851%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAACXBIWXMAABYlAAAWJQFJUiTwAAACYklEQVRIx+1UXW/TQBD0//8tCIlHkBAUkEBIgVfa0DRNGjv+/kpt587OsLOWU9O6LQ8VTzlpdes739zO7uw5t7e3mLLdboeqqrDf71HXtRrXmqY57o/nMIyQ5zmcKTAezrIMsx8/8fbde3w8+4yzT1/w9dt3fBA/iuMjMM2YPV69foP5/DccHubmMDOqwVIB5c1xnMDzthoBwYZLx/8O4I4xRhZqpcaNrutwOBzUHhvD/tiGdacsSyyvV3BdF7PZTKN87NB9gKmLnMOho4unxhQAmVjbom3vzFoLp9q38EuLIu/zlSQp4iTp/TRFEIYoigJBEOraduvDE5tiwkucxnRIqg6ZHPY8H1EU62EepM/DaZrJvO3BpDir9Y3m+370Srmn+zTlpwaj6sYR7poW69wiiUK92XU9LZJGKBJZy9q1fNPn/vVqrbZYXKEUUY+j1AhN26ES2qTAnFH5pJhL3gafeaXGiqJUbRaiDOa5rvs8/hXhc5p7bjwoSlFbLFODKPAxv1zgUqhcXS2xIi2ZSY8pWCyW+HV+AdfzdK/3t1M67ItCdGrJGAsr8/A96KvXnR39Z9QeRGhsh0IKY7T1+hbse7tBw5dG/KE92b/MJf2266Yp70TYbmERhYHQmCtFVpa0NxsX5xdz1SC/mY6BOsU+Brynw5cZGiFbL9hZlEWunUFji2VZrhbKN2c+Yb4fHGXEbqI2uU6fj4xGWIsG46pFLvpa32ywEWFT3Gwxgm99v29FmVltfR9FgzfyL9dYaaaJF3E4eMFxlM2/2vjxfWzdeanIRlU+AZ4AT4AnwP8A+AdEcQUNAckY4QAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="search results" title="" src="/static/search_results-e3aa20e251b624eb3f8d664693f884de-410e4.png" srcset="/static/search_results-e3aa20e251b624eb3f8d664693f884de-40503.png 197w,\n/static/search_results-e3aa20e251b624eb3f8d664693f884de-7fe66.png 394w,\n/static/search_results-e3aa20e251b624eb3f8d664693f884de-410e4.png 752w" sizes="(max-width: 752px) 100vw, 752px">\n    </span>\n  </span>\n  \n  </a>\n    \n  \n  <a class="gatsby-resp-image-link" href="/static/passenger-c22993d5811499b0dfae859122bbe4fb-92a15.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 750px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 177.86666666666667%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAACXBIWXMAAAsSAAALEgHS3X78AAADEUlEQVRIx+1UyW4TQRCdv+DGCYTEJoEEX8ABCYkP4cABEEEgrkggcULiM4ggUaRsOHZsbMeJ7RAvInHiOHbi3eNlZmzP4kdXT9qZOOMEQQ4cUtJzl6trql9VV5ekqiqc0DQNiqKg0+kMdVoJtN/tdo/5Clu5XEaz1YIknMVmv99HuVLB1PQMFhY9CIbCCAbDmJ1bgG85gLn5RW7fze1xXzrQMHRMfp3Cr80tSBSEjIKVWBuNBuoMsiyjXmd6vc5tJcaE9Ha7PWRK34hV0nUdg8EAo2JZFkzTHMKyxGrbDcMAfSsg/ku0mc/nkU6nkUgkkEqlEI/HeV3+RiRiR2kVi0VUWO2ouIVCgTMhof2zAIfOGbqJSM2ZutDpw9F9DCxmtyCRodfr8RtzOo9lw0TUjP7TStLSDGh9ExLVyuvzw7PkY6nuD9N0E2Gv1WqQm02udzoKX1e2ZWRKKiS3j8YFHD1M6E6bNJrOOIZOH1ESp69hWszOLkVjKfsDQQR+hBBZjfImdgvqDFillFlnkJTKVb6GMzK2iorNUNO6HFRPceunBRS3S/+Ff0+3OEvprDr9yd6xGtIbDIUjWIvGkEym2YmnNzRPuXqUcrlipxyilEuK3Ye02WjIaLXap7ITQr0nUtV1uw/VnomeYdk1HKXvfAVOmC52Xkf+TO0nyBnSZYjXMm76jGsjAWJNsfiAXV2LIRqLIxZfx0YiyUrQPBy6bDqzlQ6k9lIO559zEonDW2xaEyGJfnayOY7NzA5y+QJyewVktrPcls3lUdgvIl844LbtnV3ssSdqWoMT4NOG535uwgLWO31MrRUxHS2NwLbR3peVA45vq25+JczEypiMFNlwYG0T3Grg+ksfbr9a5rh1CNJvTPhw720Ajz9G8PD9Cu4z/ebEkY/Andd+XH7qwef5XRZws4Erz5Zw7YX3BK4+9/KgD96F8OhDGHff+Llt1I8IXXqyiE+zWUhNVcdSqjYWnmQVcz8rmF2v4DvTvS4+3nQNCxsV5Kqq+1v+F5HsTj8fWHbbnDPDi4AXAf+DgL8BFeW8goM7YaIAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="passenger" title="" src="/static/passenger-c22993d5811499b0dfae859122bbe4fb-92a15.png" srcset="/static/passenger-c22993d5811499b0dfae859122bbe4fb-1456f.png 197w,\n/static/passenger-c22993d5811499b0dfae859122bbe4fb-a0a1a.png 394w,\n/static/passenger-c22993d5811499b0dfae859122bbe4fb-92a15.png 750w" sizes="(max-width: 750px) 100vw, 750px">\n    </span>\n  </span>\n  \n  </a>\n    \n  \n  <a class="gatsby-resp-image-link" href="/static/menu-6e5c974a476edf9de2e737126d5e9527-92a15.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 750px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 177.86666666666667%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAACXBIWXMAAAsSAAALEgHS3X78AAACF0lEQVRIx+2Vy27bMBBF+f/f0qIBumzaAi2yKoLEqeWHnNqWEUmWrEf0pGzAuOVQoqLESSvKmy66OCZlk9d3hjMiK8sSQymKQsI5h+d5eEwSMPUl0V2kI3g4HPDh4iPm5gKs+2Oe51ri3XVqZGqy3+9xPB7lv9Fcx2X3mYVhiHfvL2AYU3y6/IKb2xGMyRRVxXs5fBkNozAdx0EQBCIHJmzbxm63085n6zBNU6zXFsgpiZKY7/snLvoiBUd3PzGdznD5+Su+fb/C9fWNLIUhpcTUgVDOqqpq0XX2LIdUkFmWybJRnCV4O7rD2rJaZ+d0j6xDElI5G+qsdZhlOcbGBLO5eRKqTmG3gvRBJ005pC4hp7phd9fLHNq2I3K4wa/lClEUaYmqdeowpaDrbmGLblmuVojjeJDgqyETLxf04aSXF4t7TESnjMeGaL9wUB5VHTP1xlWcXTbd7njWKQOoHdIJFaKoeUNZkxVlP/J6P1EUTac8hBxzJ4fp1szEfPtYCfbN+DZ+sscm4LACMsFrhyQ42ojXmJXCeMgkrhT7O54QJLGlXzaCdDkJq23IDRRKH9JOyKTDKO4o5QgFUVaPQ8lUDsnyj2WCKzMWOSzgpQc4Ihy3BxTyvVfKfU3IJQKhvo1r/ISL50oL2rNLKpkCVsqOEMUtnPK28gtNnvZIhzXdii81edrD9Df/GXbO/fHmnfJf8N8S/A06CNIthtsV8AAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="menu" title="" src="/static/menu-6e5c974a476edf9de2e737126d5e9527-92a15.png" srcset="/static/menu-6e5c974a476edf9de2e737126d5e9527-1456f.png 197w,\n/static/menu-6e5c974a476edf9de2e737126d5e9527-a0a1a.png 394w,\n/static/menu-6e5c974a476edf9de2e737126d5e9527-92a15.png 750w" sizes="(max-width: 750px) 100vw, 750px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>',frontmatter:{date:"2017-09-01T12:00:00Z",path:"/busbud-redesign",title:"Busbud Redesign",timeframe:"March - June 2017",images:{first:"bb1",second:"bb2"},gradient:{left:"#5CAFEC",right:"#5CAFEC"}}}},pathContext:{}}}});
//# sourceMappingURL=path---busbud-redesign-5b2dad9d8ad67be3fc19.js.map