/*<![CDATA[*/
		function forceHttps(){"https:"!=window.location.protocol&&(window.location.href="https:"+window.location.href.substring(window.location.protocol.length))};
		forceHttps();

		function initData(){var a={currUrl:window.location.href,hostUrl:window.location.host,homeUrl:window.location.protocol+"//"+window.location.host,pathUrl:window.location.pathname,logoImg:"https://lh3.googleusercontent.com/-_6moT1xjSk8/W5_1xI0TWuI/AAAAAAAADDc/DwDuR-_MKwwxorZ3lGZYb6dgrP-ToNJYwCLcBGAs/h120/logo%2BVarya%2Bblogger.png",feedUrl:"https://www.blogger.com/feeds/9145674188235673645",api3Url:"https://www.googleapis.com/blogger/v3/blogs/9145674188235673645",api3Key:"AIzaSyANy6j5PUHAZyLlMuiVs5g1514TxZXOa4E",};var b=b=document.getElementsByTagName("meta");for(var c=b.length;c--;){var d=b[c].getAttribute("name");if(d!=null||undefined){if("init:"==d.slice(0,5)){var d=d.slice(5),e=b[c].getAttribute("content");a[d]=e;b[c].remove()}}}return a;};
		var init=initData();
		
		function initAdd(a={}){var b=Object.keys(a);for(c=b.length;c--;){init[b[c]]=a[b[c]];}};
		
		function elApp(a,b={}){var k=Object.keys(b),e=document.createElement("script"),i=true;e.setAttribute("type","text/javascript");for(l=k.length;l--;){var j=(i==true)?"?":"&";a+=j+k[l]+"="+b[k[l]];if(i)i=false;}e.setAttribute("src",a);document.body.appendChild(e);};

		function elConst(a=[],i,o=true){for(var h=0,b=a.length;h<b;++h){var g=a[h];var c="";if(typeof g==="object"&&Array.isArray(g)){c=document.createElement("div");for(var k=0,l=g.length;k<l;++k){var m=g[k];if(typeof m==="string"){c=document.createElement(m);}if(typeof m==="object"){if(Array.isArray(m)){elConst(m,c);}else{var p=Object.keys(m);for(var q=0,r=p.length;q<r;++q){c.setAttribute(p[q],m[p[q]]);}}}}}if(typeof g==="string"){var j=/<[a-z][\s\S]*>/i.test(g);if(true==j){c=document.createElement("div");c.innerHTML=g;}else{c=document.createTextNode(g);}};o==true?i.appendChild(c):i.insertBefore(c,i.childNodes[o]);}};

		function checkSearch(a){return""==a.q.value?(a.q.focus(),!1):!0};
		
		function imgOpt(i,w=260,h=260){var a=i.lastIndexOf('/');var d=a-1;var b=i.lastIndexOf('/',d);var e=a+1;var c=i.slice(b,e);var f=i.replace(c,'/w'+w+'-h'+h+'-c/');return f;};

		function getFirstImg(b){b=b.content;var a=b.indexOf("<img");if(-1<a){var a=b.indexOf("src=",a),a=a+5,c=b.indexOf('"',a);m=b.slice(a,c)}else m=init.logoImg;return m};
		
		function labelParser(b){for(var c=0,d=0,e="active",f="",a=0,l=b.length;a<l;++a){var g=b[a].slice(0,-1),h=parseInt(b[a]),k=isNaN(b[a]);h==b[a]&&0==k?c=b[a]:h==g&&1==k?d=g:"OutOfStock"==b[a]?e="disabled":"featured"!=b[a]&&(f=b[a])}return[c,d,c-d/100*c,e,f]};

		function imgParser(r,l=[],i=0){var m=r.indexOf('<img',i);if(m>-1){var n=r.indexOf('src=',m);n+=5;var o=r.indexOf('"',n);var p=r.slice(n,o);l.push({url:p});imgParser(r,l,o);}return l;};

		function getRandomInt(a,b){a=Math.ceil(a);b=Math.floor(b);return Math.floor(Math.random()*(b-a))+a};

		function vidParser(a){var b=a.indexOf('<iframe',0);if(b>-1){var d=a.indexOf('embed/',b);d+=6;var e=a.indexOf('?',d);return a.slice(d,e);}else{var g="USzHpCH3Xzo 55G3SYiosPM zrcMq4DbzCU 0rVVDVYtE8E JX8tuaZ_dPI FoB1GcxmtN4 he9_3RdenV0 AL6uyLWTdMw Q5lj_RpnDls eXP4Ll5-fZA Ip-IBrKx-n0 v5VCWC-iS1Y P79DDt7CD5g Lgtq9cg2CrM pXEYMwH4y7c 7crjTJL74EM bMHxsY6fkWA 1qo0KKaOoAM yyDwGBQKbK8 ZgPtHq6H8ao EzU-X3ZSxJI dM_7JbGVpwM nenJTQJEEoM MHQ9-scsEoo 8_Ly__RNOjY 1QJeiKGSU70 kiawzS5_vhQ ydWc4y3uvrg oE0XGiRithE 5zp7xB02GSs wefA8alH-0w YQzVPPewuR0 elywnjPe8lo Yzws1szA1lE saJdqkfrBcc byxshR2bz0g 7s61gDz4brI RKw5kRteFyI shmlddgUmzs G7iyR6YADDA xpm_bSyaY98 kX7l3GheOBA D6yM1YFTvy0 r8hDbGsD9i8 tzuq4WXkYkI 7edyAocHuWw 4Cm0irWlpYE".split(" "),h=g.length;return g[getRandomInt(0,h--)];}};

		function stripTags(a,b){b=(((b||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");return a.replace(/\x3c!--[\s\S]*?--\x3e|<\?(?:php)?[\s\S]*?\?>/gi,"").replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,function(a,c){return-1<b.indexOf("<"+c.toLowerCase()+">")?a:""}).replace(/\s*(<br ?\/>\s*)+/g,"<br />").replace(/^<br \/>|<br \/>$/g,"")};

		function summStrip(b){var a=document.createElement("span");a.innerHTML=b;a=a.textContent||a.innerText;a=a.replace(/\r?\n|\r/g," ");return a.trim()};
		
		function LcyUrl(a){return a.replace("varyastore.blogspot.com",init.hostUrl)};
		
		function idrize(a,b=true){var a=a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");if(b==true){a+=" IDR";};return a;};

		function capitalize(a){a=a.toLowerCase().split(" ");for(var b=0;b<a.length;b++)a[b]=a[b].charAt(0).toUpperCase()+a[b].substring(1);return a.join(" ")};

		function itemParser(a){var b=a.content,e=imgParser(b),f=vidParser(b),b=stripTags(b,"<br>"),c=labelParser(a.labels),d=new Date(a.published),d=d.toDateString();return{images:e,vidid:f,title:a.title,content:b,url:a.url,label:c[4],price:c[0],discount:c[1],new_price:c[2],status:c[3],published:d}};

		function quickOrderFunc(a){a=document.getElementById("title_product").value;var b=document.getElementById("price_product").value,c=document.getElementById("num_product").value,d=document.getElementById("code_product").value;a=encodeURI("Assalamualaikum, mbak mau order "+a+", kode: "+d+", jumlah: "+c+", harga/pcs: "+b+", url: "+window.location.href);window.location.href="https://api.whatsapp.com/send?phone=62818937953&text="+a};
		
		function addToCartFunc(a){a=window.localStorage;a.VaryaCart||a.setItem("VaryaCart",JSON.stringify([]));var b=a.getItem("VaryaCart"),b=JSON.parse(b),c=document.getElementById("title_product").value,d=document.getElementById("price_product").value,e=document.getElementById("num_product").value,f=document.getElementById("code_product").value;b.push({title:c,url:window.location.href,price:d,count:e,code:f});a.setItem("VaryaCart",JSON.stringify(b));cartSummary();univModal("Anda menambahkan "+capitalize(c)+" ke dalam daftar belanjaan")};
		
		function contactUs(a){a=document.getElementById("name").value;var b=document.getElementById("message").value;""==a?univModal("Anda belum mengisi kolom nama"):""==b?univModal("Anda belum mengisi kolom pesan"):25>b.length?univModal("Pesan anda terlalu singkat"):(a=encodeURI("Nama "+a+", Pesan "+b),window.location.href="https://api.whatsapp.com/send?phone=62818937953&text="+a)};
		
		function cartSummary(){var a=window.localStorage;a.VaryaCart||a.setItem("VaryaCart",JSON.stringify([]));var b=a.getItem("VaryaCart"),d=a=0,b=JSON.parse(b);document.getElementById("go_checkout");for(var c=0,f=b.length;c<f;++c)var e=Number(b[c].count),g=Number(b[c].price),a=a+e,d=d+e*g;document.getElementById("summ_count").innerHTML=a;document.getElementById("summ_price").innerHTML=idrize(d)};
		
		function cartBeat(){cartSummary();setTimeout(function(){cartBeat()},5000);};
		
		function univModal(c,b=false,h=""){var g="";if(true==b){g=[["button",{type:"button",class:"btn btn-default btn-sm","data-dismiss":"modal",onclick:"document.getElementById('univModal').remove();"},["Tidak"]],["button",{type:"button",class:"btn btn-primary btn-sm",id:"modal-exec","data-exec":h,"data-dismiss":"modal",onclick:"document.getElementById('univModal').remove();"},["Ya"]]];}if(false==b){g=[["button",{type:"button",class:"btn btn-primary btn-sm","data-dismiss":"modal",onclick:"document.getElementById('univModal').remove();"},["Ok"]]];}elConst([["div",{id:"univModal",class:"modal fade",role:"dialog"},[["div",{class:"modal-dialog modal-sm"},[["div",{class:"modal-content"},[["div",{class:"modal-header"},[["h4",{class:"modal-title"},["Varya Store"]]]],["div",{class:"modal-body"},[["p",{},[c]]]],["div",{class:"modal-footer"},g]]]]]]]],document.body);$("#univModal").modal({backdrop:"static"});};

		function updateCart(){var a=JSON.parse(localStorage.getItem("VaryaCart"));var b=0;var d=[];for(var e=0,f=a.length;e<f;++e){var g=Number(a[e].count);var h=Number(a[e].price);var k=g*h;b+=k;var w=["tr",{},[["td",{},[["a",{href:a[e].url,target:"_blank"},[["span",{},[capitalize(a[e].title)]]]]]],["td",{},[["span",{},[a[e].code]]]],["td",{style:"text-align:right"},[["span",{},[a[e].count]]]],["td",{style:"text-align:right"},[["span",{},[idrize(a[e].price,false)]]]],["td",{style:"text-align:right"},[["span",{},[idrize(k,false)]]]],["td",{},[["span",{class:"close",id:"cancel_order","data-order":e},["×"]]]]]];d.push(w);};var t=document.querySelector("tbody");while(t.firstChild)t.removeChild(t.firstChild);elConst(d,t);var i=[["span",{},[idrize(b,false)]]];var v=document.getElementById("grand_total");while(v.firstChild)v.removeChild(v.firstChild);elConst(i,v);};
		
		document.onclick=function(e){if("cancel_order"==e.target.id){var a=e.target.getAttribute("data-order");var b=JSON.parse(localStorage.getItem("VaryaCart"));univModal("Anda membatalkan order "+capitalize(b[a].title),!0,a);}if("modal-exec"==e.target.id){confirmCancelOrder(e.target.getAttribute("data-exec"));}};

		function confirmCancelOrder(a){var b=JSON.parse(localStorage.getItem("VaryaCart"));b.splice(a,1);localStorage.setItem("VaryaCart",JSON.stringify(b));updateCart()};

		function submitOrder(){var b=JSON.parse(localStorage.getItem("VaryaCart"));if(void 0==b||0==b.length)univModal("Maaf daftar belanjaan anda masih kosong");else if(""==document.getElementById("nama").value)univModal("Mohon isi nama jelas penerima");else if(""==document.getElementById("alamat").value)univModal("Mohon isi alamat lengkap penerima");else{var a="Assalamualaikum, Mbak saya mau order : ";d=0;for(e=b.length;d<e;++d)a+="/"+(1+d)+" "+b[d].title+" "+b[d].code+" "+b[d].count+"/pcs "+Number(b[d].count)* Number(b[d].price)+"IDR "+b[d].url+" ";a+="nama:"+document.getElementById("nama").value+" ";a+="alamat:"+document.getElementById("alamat").value+" ";""!=document.getElementById("note").value&&(a+="note:"+document.getElementById("note").value+" ");a=encodeURI(a);window.location.href="https://api.whatsapp.com/send?phone=62818937953&text="+a;localStorage.clear()}};		
		
		function navCat(a){var e=a.feed.category;var g=parseInt(a.feed.openSearch$totalResults.$t,10);var u=a.feed.entry?a.feed.entry:[];var f=[];a=[];for(d=e.length;d--;){var c=e[d].term;var i=parseInt(c);var h=isNaN(c);var j=c.slice(0,-1);i==c&&0==h||i==j&&1==h||"OutOfStock"==c||"featured"==c||"blog"==c||a.push(c);};a.sort();a.reverse();for(b=a.length;b--;){e=["li",{style:"width:100%"},[["a",{href:"/search/label/"+encodeURI(a[b]),class:"dropdown-item text-capitalize",style:"padding:5px 10px"},[capitalize(a[b])]]]];f.push(e);};elConst(f,document.querySelector(".category-list"));if("item"==init.pageType){while(true){if(init.items==undefined)init["items"]=[];var b=Math.floor(Math.random()*50);++b;var m=u[b];var n=m.id.$t;var o=n.indexOf("post-");o+=5;var p=n.slice(o);if(p!=init.postId){var q=init.items;var r=m.category;var t=[];for(s=r.length;s--;)t.push(r[s].term);q.push({id:p,url:m.link[4].href,title:m.title.$t,labels:t,images:[{url:m.media$thumbnail.url}]});initAdd({items:q});};var k=init.items;if(k.length==3){var l=gridTemp(init);elConst(l,document.getElementById("related_product"));break;}}};if("static_page"==init.pageType){if("1740331895688944267"==init.pageId){var z=[];a.reverse();for(var y=0,ah=a.length;y<ah;++y){var aa=["li",[["a",{href:"/search/label/"+encodeURI(a[y]),target:"_blank"},[["b",["Kategori : "+capitalize(a[y])]]]]]];z.push(aa);}for(w=u.length;w--;){var ab=u[w].category;var ad=[];for(ac=ab.length;ac--;)ad.push(ab[ac].term);var ae=labelParser(ad);var af=a.indexOf(ae[4]);af++;a.splice(af,0,u[w].title.$t);var ag=["li",[["a",{href:u[w].link[0].href,target:"_blank"},[capitalize(u[w].title.$t)]]]];z.splice(af,0,ag);}var v=[];var x=Math.ceil(a.length/3);for(var ak=4,ai=0,aj=z.length;ai<aj;ai+=x){var al=z.slice(ai,ai+x);var am=[{class:"col-md-4"},[["ul",{style:"list-style:none;padding:0;margin:0;float:left"},al]]];v.splice(ak,0,am);ak++;}elConst(v,document.querySelector(".product-map"));};if("2181364119818142589"==init.pageId){updateCart();}};cartBeat();};
		
		function featTemp(a){var c=[];var d=[];var e=a.items;for(var f=0,g=e.length;f<g;++f){var i=0==f?"active":"";var h=["li",{"data-target":"#featCarousel","data-slide-to":f,class:i}];c.push(h);var j=[{class:"carousel-item "+i},[["img",{src:imgOpt(e[f].images[0].url,970,970),alt:e[f].title,title:e[f].title,class:"img-fluid img-thumbnail"}],[{class:"carousel-caption"},[["a",{href:e[f].url},[["h3",{style:"color:white"},[e[f].title]]]]]]]];d.push(j);}var b=[[{class:"row justify-content-center"},[[{class:"col-md-12"},[[{id:"featCarousel",class:"carousel slide","data-ride":"carousel"},[["ul",{class:"carousel-indicators"},c],[{class:"carousel-inner"},d],["a",{class:"carousel-control-prev",href:"#featCarousel","data-slide":"prev"},[["span",{class:"carousel-control-prev-icon"}]]],["a",{class:"carousel-control-next",href:"#featCarousel","data-slide":"next"},[["span",{class:"carousel-control-next-icon"}]]],]],]],[{class:"clr"}],["br"],]]];elConst(b,document.getElementById("main_content"),0);};		
		
		function gridTemp(a){var b=a.items;var i=[];if(a.kind!=undefined){var s=init.srcQry!=undefined?"Query '"+init.srcQry+"'":(init.srcLbl!=undefined?"Kategori '"+init.srcLbl+"'":"Terbaru");var m=[{class:"row justify-content-center",style:"padding-bottom:10px"},[["h4",{class:"text-capitalize"},[s]]]];i.push(m);}for(var e=[],g=1,c=0,d=b.length;c<d;++c){var h=labelParser(b[c].labels);var k=b[c].images?b[c].images[0].url:getFirstImg(b[c]);var n=[["span",{style:"color:#FF6A00;float:left"},[idrize(h[2])]]];if(h[1]>0){var o=["span",{style:"color:#212529;float:right"},[idrize(h[2]).strike()+" "+h[1]+"% OFF"]];n.push(o);}var f=[{class:"col-md-4",style:"padding-bottom:20px"},[["a",{href:b[c].url},[["img",{src:imgOpt(k,340,340),class:"img-fluid img-thumbnail",width:"100%"}],[{class:"text-capitalize"},[["b",[capitalize(b[c].title)]],["p",n]]]]]]];e.push(f);if(g==3||d==g||c==(d-1)){var j=[{class:"row"},e];i.push(j);e=[];g=0;}g++;}if(a.nextPageToken!=undefined){var l=[{class:"row justify-content-center",id:"load_more"},[[{class:"col-md-5"},[["button",{type:"button",class:"btn btn-default btn-block",onclick:"return loadMoreQuery(this);"},["Load more..."]]]]]];i.push(l);window.sessionStorage.setItem("token",a.nextPageToken);};return i;}
		
		function loadMoreTemp(a){document.getElementById("load_more").remove();var b=gridTemp(a);elConst(b,document.getElementById("main_content"));}
		
		function itemTemp(a){a=itemParser(a);var c=a.images;var f=[];var g=[];for(var d=0,e=c.length;d<e;++d){var k=0==d?"active":"";var j=["li",{"data-target":"#itemCarousel","data-slide-to":d,class:k,style:"width:20%;position:relative;height:auto"},[["img",{src:imgOpt(c[d].url,128,128),"class":"img-fluid img-thumbnail",style:"width:100%;display:block;position:relative",alt:a.title,title:a.title},[]]]];g.push(j);var i=[{"class":"carousel-item "+k},[["img",{src:imgOpt(c[d].url,645,645),"class":"img-fluid img-thumbnail",style:"width:100%",alt:a.title,title:a.title},[]]]];f.push(i);};var h=[["a",{href:a.url},[["h5",{class:"text-uppercase"},[a.title]]]],["input",{type:"hidden",id:"title_product",value:a.title}],["h5",{style:"color:#FF6A00"},[idrize(a.new_price)]],["input",{type:"hidden",id:"price_product",value:a.new_price}],];var n={class:"form-control",id:"num_product"};var o={class:"form-control",id:"code_product",type:"text",placeholder:"Diisi kode/warna/note product"};var p={type:"button",class:"btn btn-success btn-block",id:"quick_order",onclick:"quickOrderFunc(this);"};var q={type:"button",class:"btn btn-primary btn-block",id:"add_to_cart",onclick:"addToCartFunc(this);"};if(a.discount>0){var l=["h6",[idrize(a.price).strike()+" "+a.discount+"% OFF"]];h.push(l);}if(a.status=="disabled"){var m=["h5",["Out Of Stock"]];h.push(m);n["disabled"]=true;o["disabled"]=true;p["disabled"]=true;q["disabled"]=true;}var b=[[{class:"row"},[[{class:"col-md-8"},[[{id:"itemCarousel",class:"carousel slide","data-ride":"carousel"},[[{class:"carousel-inner"},f],["a",{class:"carousel-control-prev",href:"#itemCarousel","data-slide":"prev"},[["span",{class:"carousel-control-prev-icon"}]]],["a",{class:"carousel-control-next",href:"#itemCarousel","data-slide":"next"},[["span",{class:"carousel-control-next-icon"}]]]]],["ul",{class:"carousel-indicators",style:"width:100%;padding:0;margin:20px 0 0;position:relative"},g],["br"],["h5",["Kabarkan Kepada Yang Lain"]],[{class:"clr"}],[{style:"float:left;width:25%;padding:0 0 20px;margin:0"},[["a",{href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURI(a.url),target:"_blank"},[["i",{class:"fa fa-lg fa-facebook text-primary"}]]]]],[{style:"float:left;width:25%;padding:0 0 20px;margin:0"},[["a",{href:"https://twitter.com/share?url="+encodeURI(a.url)+"&text="+encodeURI(a.title)+"&via=VaryaStore&hashtags=VaryaStore",target:"_blank"},[["i",{class:"fa fa-lg fa-twitter text-info"}]]]]],[{style:"float:left;width:25%;padding:0 0 20px;margin:0"},[["a",{href:"https://plus.google.com/share?url="+encodeURI(a.url),target:"_blank"},[["i",{class:"fa fa-lg fa-google-plus text-danger"}]]]]],[{style:"float:left;width:25%;padding:0 0 20px;margin:0"},[["a",{href:"whatsapp://send?text="+encodeURI(a.title)+"%20"+encodeURI(a.url),target:"_blank"},[["i",{class:"fa fa-lg fa-whatsapp text-success"}]]]]],[{class:"clr"}]]],[{class:"col-md-4"},[["ul",{class:"list-group",style:"width:100%;padding:0"},[["li",{class:"list-group-item"},h],["li",{class:"list-group-item"},[[{style:"float:left;width:50%;padding:0;margin:0"},[["i",{class:"fa fa-calendar"}],["i",[" "]],["i",[a.published]]]],[{style:"float:left;width:50%;padding:0;margin:0"},[["i",{class:"fa fa-list-alt"}],["i",[" "]],["a",{href:"/search/label/"+encodeURI(a.label),target:"_blank"},[["i",{class:"text-capitalize"},[a.label]]]]]],[{class:"clr"}]]],["li",{class:"list-group-item"},[["p",[a.content]]]],["li",{class:"list-group-item"},[[{class:"form-group"},[["label",{for:"num-product"},["Jumlah:"]],["select",n,[["option",["1"]],["option",["2"]],["option",["3"]],["option",["4"]],["option",["5"]],["option",["6"]],["option",["7"]],["option",["8"]],["option",["9"]],["option",["10"]],]]]],[{class:"form-group"},[["label",{for:"code-product"},["Kode/Warna/Note:"]],["input",o]]]]],["li",{class:"list-group-item"},[[{class:"form-group"},[["label",{for:"quick_order"},["Order langsung:"]],["button",p,["Quick Order via WhatsApp ",["i",{class:"fa fa-whatsapp fa-lg"}]]]]],[{class:"form-group"},[["label",{for:"add_to_cart"},["Keranjang belanja:"]],["button",q,["Add to Cart ",["i",{class:"fa fa-cart-plus fa-lg"}]]]]]]]]]]]]],["br"],[{class:"row"},[[{class:"col-md-12"},[["h5",["Produk Terkait "+capitalize(a.title)]],[{class:"clr"}],[{id:"related_product"}]]]]],[{class:"row"},[[{class:"col-md-12"},[["h5",["Video Terkait "+capitalize(a.title)]],[{class:"clr"}],["iframe",{width:"320",height:"266",class:"YOUTUBE-iframe-video img-thumbnail","data-thumbnail-src":"https://i.ytimg.com/vi/"+a.vidid+"/0.jpg",src:"https://www.youtube.com/embed/"+a.vidid+"?feature=player_embedded",frameborder:"0",allowfullscreen:true,alt:capitalize(a.title),title:capitalize(a.title)}]]]]],["br"],[{class:"row"},[[{class:"col-md-12"},[["h5",["Komentar Terkait "+capitalize(a.title)]],[{class:"clr"}],[{class:"fb-comments","data-width":"100%"}]]]]]];return b;}
		
		function pageTemp(a){if(init.pageId=="2181364119818142589"){return[[{class:"container"},[["br"],["h2",["Daftar Belanja"]],["p",["Pastikan anda memahami betul produk yang anda order, total harga belum termasuk ongkos kirim, ongkos kirim akan segera kami infokan saat pemrosesan."]],[{class:"table-responsive"},[["table",{class:"table"},[["thead",[["tr",[["th",["Produk"]],["th",["Kode"]],["th",{style:"text-align:right;width:5%"},["Jumlah"]],["th",{style:"text-align:right;width:15%"},["Harga/pcs (IDR)"]],["th",{style:"text-align:right;width:15%"},["Harga (IDR)"]],["th",{style:"text-align:center;width:5%"},["Batal"]]]]]],["tbody"],["tfoot",[["tr",[["td",[["b",["Total Harga (IDR)"]]]],["td"],["td"],["td"],["td",{style:"text-align:right;"},[["b",{id:"grand_total"}]]],["td"],]]]]]]]],["br"],["br"],["h2",["Form Pemesanan"]],["p",["Isi data pemesanan selengkap mungkin demi kelancaran dalam memproses order anda. Ketika anda memutuskan untuk berbelanja di toko online kami, berarti anda Menyetujui dengan ",["a",{href:"/p/ketentuan-layanan.html"},["Ketentuan Layanan"]]," kami yang berlaku."]],[{class:"form-group"},[["label",{for:"nama"},["Nama Pemesan:"]],["input",{type:"text",class:"form-control",id:"nama",placeholder:"Nama...",name:"nama"}]]],[{class:"form-group"},[["label",{for:"alamat"},["Alamat Pengiriman:"]],["textarea",{class:"form-control",row:"5",id:"alamat",placeholder:"Alamat Lengkap ( Kelurahan, Kecamatan, Kabupaten, Propinsi )",name:"alamat"}],]],[{class:"form-group"},[["label",{for:"note"},["Catatan (optional) :"]],["textarea",{class:"form-control",row:"5",id:"note",placeholder:"Catatan",name:"note"}]]],["br"],["button",{type:"submit",class:"btn btn-success btn-block",onclick:"return submitOrder();"},["Submit Order via WhatsApp ",["i",{class:"fa fa-whatsapp fa-lg"}]]],[{class:"clr"}],]],["br"],["br"],];}else if(init.pageId=="1740331895688944267"){var b=new Date(a.published);b=b.toDateString();return[[{class:"row"},[[{class:"col-md-12"},[["a",{href:a.url},[["h2",{class:"text-center text-capitalize"},[a.title]]]],["small",{class:"text-center"},[["i",{class:"fa fa-calendar"}],["i",[" "]],["i",[b]],["i",[" "]]]]]]]],["br"],[{class:"row product-map"},[[{class:"col-md-12"},[["h5",["Produk :"]]]]]],["br"],[{class:"row"},[[{class:"col-md-12"},[["h5",["Halaman :"]]]],[{class:"col-md-4"},[["ul",{style:"list-style:none;padding:0;margin:0;float:left"},[["li",[["a",{href:"/p/privacy-policy.html"},["Privacy Policy"]]]],["li",[["a",{href:"/p/tentang-kami.html"},["Tentang Kami"]]]],["li",[["a",{href:"/p/panduan-belanja.html"},["Panduan Belanja"]]]],["li",[["a",{href:"/p/ketentuan-layanan.html"},["Ketentuan Layanan"]]]],["li",[["a",{href:"/p/peta-site.html"},["Peta Site"]]]]]]]]]]];}else{var b=new Date(a.published);b=b.toDateString();return[[{class:"row"},[[{class:"container"},[[{class:"col-md-12"},[["a",{href:a.url},[["h2",{class:"text-center text-capitalize"},[a.title]]]],["small",{class:"text-center"},[["i",{class:"fa fa-calendar"}],["i",[" "]],["i",[b]],["i",[" "]]]],[{class:"clr"}],["p",[a.content]]]]]]]]];}}
		
		function errorTemp(a){var b=new Date();b=b.toDateString();return[[{class:"row"},[[{class:"container"},[[{class:"col-md-12"},[["a",{href:a.url},[["h2",{class:"text-center text-capitalize"},["404"]]]],["small",{class:"text-center"},[["i",{class:"fa fa-calendar"}],["i",[" "]],["i",[b]],["i",[" "]]]],[{class:"clr"}],["p",["Halaman yang anda kehendaki tidak kami ketemukan"]]]]]]]]];}
		
		function initTemp(a){var d=new Date;d=d.getFullYear();var f=init.srcLbl?init.srcLbl:(init.srcQry?init.srcQry:"");var e="";var h="VaryaStore | Belanja Lebih Mudah";var g="Menjual Jilbab, Hijab, Baju Muslim, Busana Muslim, Gamis, Modern, Terbaru, Ciput, Inner, Khimar, Mukena, Sarung, Bross, Pashmina, Grosir maupun Eceran";var i=init.logoImg;if("index"==init.pageType){e=gridTemp(a);if(f!=""){h=capitalize(f)+" | VaryaStore";}}if("item"==init.pageType){e=itemTemp(a);h=capitalize(a.title)+" | VaryaStore";g=summStrip(a.content);i=getFirstImg(a);}if("static_page"==init.pageType){e=pageTemp(a);h=capitalize(a.title)+" | VaryaStore";}if("error_page"==init.pageType){e=errorTemp(a);}var b=[["link",{href:"https://varyastore.blogspot.com/feeds/posts/default",rel:"alternate",type:"application/atom+xml",title:"Varya Store - Atom"}],["link",{href:"https://varyastore.blogspot.com/feeds/posts/default?alt=rss",rel:"alternate",type:"application/rss+xml",title:"Varya Store - RSS"}],["link",{href:"https://www.blogger.com/feeds/6150337322814186641/posts/default",rel:"service.post",type:"application/atom+xml",title:"Varya Store - Atom"}],["link",{href:init.currUrl,rel:"canonical"}],["link",{href:"https://lh3.googleusercontent.com/-Eq2AmVLk14Y/WwMIjJOUWXI/AAAAAAAAAO0/ELAg-4jW8ZAJc9HnQEcYpi17qrF812e9ACLcBGAs/h120/varya.ico",rel:"icon",type:"image/x-icon"}],["meta",{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}],["meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"}],["title",[h]],["meta",{name:"description",content:g}],["meta",{name:"image",content:i}],["meta",{name:"url",content:init.currUrl}],["meta",{name:"robots",content:"index, follow, noodp, noydir"}],["meta",{name:"geo.placename",content:"Indonesia"}],["meta",{name:"geo.country",content:"id"}],["meta",{name:"generator",content:"blogger"}],["meta",{name:"revisit-after",content:"1 hour"}],["meta",{name:"rating",content:"general"}],["meta",{name:"googlebot",content:"index, follow, snipet"}],["meta",{name:"author",content:"Varya Store"}],["meta",{property:"og:title",content:h}],["meta",{property:"og:description",content:g}],["meta",{property:"og:image",content:i}],["meta",{property:"og:url",content:init.currUrl}],["meta",{property:"og:site_name",content:"Varya Store"}],["meta",{property:"og:type",content:"product"}],["meta",{property:"og:locale",content:"id_id"}],["meta",{property:"fb:admins",content:"https://web.facebook.com/varya.muslimah"}]];var c=[["nav",{class:"navbar navbar-expand-md bg-light navbar-light"},[["a",{href:init.homeUrl},[["img",{src:init.logoImg,alt:"Varya Store",title:"Varya Store"}]]],["button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},[["span",{class:"navbar-toggler-icon"}]]],[{class:"collapse navbar-collapse",id:"collapsibleNavbar"},[["ul",{class:"navbar-nav",style:"min-width:20%"},[["li",{class:"nav-item dropdown",style:"width:100%;margin:auto"},[["a",{href:"#",class:"nav-link dropdown-toggle active",id:"navbardrop","data-toggle":"dropdown",style:"margin:auto;text-align:center"},[["i",{class:"fa fa-list-alt"}],["span",[" Kategori"]]]],[{class:"dropdown-menu category-list",style:"width:100%"}]]]]],["form",{class:"navbar-form search_form",action:"/search",onsubmit:"return checkSearch(this);",role:"search",style:"width:100%"},[[{class:"input-group search_input"},[["input",{class:"form-control",value:f,name:"q",placeholder:"Pencarian...",type:"text"}],[{class:"input-group-btn"},[["button",{class:"btn btn-default",type:"submit"},[["i",{class:"fa fa-search"}]]]]]]]]],["ul",{class:"navbar-nav",style:"min-width:20%"},[["li",{class:"nav-item dropdown",style:"width:100%;margin:auto"},[["a",{href:"#",class:"nav-link dropdown-toggle active",id:"navbardrop","data-toggle":"dropdown",style:"margin:auto;text-align:center"},[["i",{class:"fa fa-shopping-cart"}],["span",[" Belanja"]]]],[{class:"dropdown-menu",style:"width:100%"},[["h5",{class:"dropdown-header"},["Count"]],["a",{href:"#",class:"dropdown-item"},[["span",{id:"summ_count"}]]],["h5",{class:"dropdown-header"},["Price"]],["a",{href:"#",class:"dropdown-item"},[["span",{id:"summ_price"}]]],["button",{type:"button",class:"btn btn-light btn-block btn-sm font-weight-bold",onclick:"window.location.href='/p/checkout-page.html'"},["Checkout"]]]]]]]]]]]],[{class:"container-fluid",id:"main_content",style:"padding:20px 0"},e],["footer",{class:"bg-light"},[["br"],[{class:"row"},[[{class:"col-md-4"},[["h5",{class:"text-center"},["Halaman"]],["ul",{class:"text-center",style:"list-style:none;padding:0"},[["li",[["a",{href:"/p/ketentuan-layanan.html"},["Ketentuan Layanan"]]]],["li",[["a",{href:"/p/panduan-belanja.html"},["Panduan Belanja"]]]],["li",[["a",{href:"/p/privacy-policy.html"},["Privacy Policy"]]]],["li",[["a",{href:"/p/tentang-kami.html"},["Tentang Kami"]]]],["li",[["a",{href:"/p/peta-site.html"},["Peta Site"]]]]]]]],[{class:"col-md-4"},[["h5",{class:"text-center"},["Pembayaran & Pengiriman"]],["table",{style:"width:100%;text-align:center;"},[["tr",[["td",[["img",{src:imgOpt("https://lh3.googleusercontent.com/-IOy5F-g0UcI/Wv7egK6yGYI/AAAAAAAAAKA/Z40vAXTYDSQeocXKyOkRZNwACMsFvNtJACLcBGAs/h88/logo%2Bbri.png",75,18),class:"logo_bri",alt:"bri",title:"bri"}]]],["td",[["img",{src:imgOpt("https://lh3.googleusercontent.com/-XsYtuIwC0YE/Wv7h85eNZwI/AAAAAAAAAK0/vxQiWBdeO2cg4O5F3gRtf8TBXXEmktVAQCLcBGAs/h85/logo%2Bjnt.png",60,14),class:"logo_jnt",alt:"jnt",title:"jnt"}]]],]],["tr",[["td",[["img",{src:imgOpt("https://lh3.googleusercontent.com/-tuQ2Z2VvDyA/Wv7ddgZiQRI/AAAAAAAAAJ0/v7B8XhBEnlon0IYW-pYRD54BSxSVKms7ACLcBGAs/h113/logo%2Bmandiri.png",65,20),alt:"mandiri",title:"mandiri"}]]],["td",[["img",{src:imgOpt("https://lh3.googleusercontent.com/-LGw9QI_YR_g/Wv7g8MlE5qI/AAAAAAAAAKk/XLIrIUZ7CwoL6pEBajEnThlUMp-lIpInQCLcBGAs/h75/logo%2Btiki.png",65,14),class:"logo_tiki",alt:"tiki",title:"tiki"}]]],]],["tr",[["td",[["img",{src:imgOpt("https://lh3.googleusercontent.com/-6QvYOkG9EU4/Wv7bWlcFViI/AAAAAAAAAJY/b2ij8NU1yig2L27nLyXU2a3in7JpQsf6wCLcBGAs/h106/logo%2Bbni.png",55,16),alt:"bni",title:"bni"}]]],["td",[["img",{src:imgOpt("https://lh3.googleusercontent.com/-VN2kxPEMDKs/Wv7fjtkiIjI/AAAAAAAAAKU/VybER45-C58unGAPafgjrs_P8tj2yYkswCLcBGAs/h120/logo%2Bpos.png",35,25),alt:"pos indonesia",title:"pos indonesia"}]]],]],["tr",[["td",[["img",{src:imgOpt("https://lh3.googleusercontent.com/-RVvbxhFD3l4/Wv7Zok7d4MI/AAAAAAAAAJM/hMsfcOiN6ZofgGAD7XW7Xhx5mNJ52szdwCEwYBhgL/h117/logo%2Bbca.png",60,20),alt:"bca",title:"bca"}]]],["td",[["img",{src:imgOpt("https://lh3.googleusercontent.com/-GxaYIRt6oEY/Wv7gIoM04vI/AAAAAAAAAKc/EgpFzixpYr4eHvMnWzGrrWvTSYORYG38ACLcBGAs/h120/logo%2Bjne.png",48,14),alt:"jne",title:"jne"}]]]]]]],["br"]]],[{class:"col-md-4"},[["h5",{class:"text-center"},["Media Sosial"]],["ul",{style:"list-style:none;padding:0",class:"text-center"},[["li",{style:"width:25%;float:left"},[["a",{href:"https://www.facebook.com/varya.muslimah",target:"_blank"},[["i",{class:"fa fa-facebook-official fa-lg text-primary"}]]]]],["li",{style:"width:25%;float:left"},[["a",{href:"https://www.instagram.com/varyastore/",target:"_blank"},[["i",{class:"fa fa-instagram fa-lg text-danger"}]]]]],["li",{style:"width:25%;float:left"},[["a",{href:"https://www.youtube.com/channel/UCRhrUx8XseaRZljoUppl4PQ",target:"_blank"},[["i",{class:"fa fa-youtube-square fa-lg text-warning"}]]]]],["li",{style:"width:25%;float:left"},[["a",{href:"https://api.whatsapp.com/send?phone=62818937953&amp;text=Assalamualaikum%20mau%20tanya%20sis;",target:"_blank"},[["i",{class:"fa fa-whatsapp fa-lg text-success"}]]]]]]],["div",{class:"clr"}],["br"],["h5",{class:"text-center"},["Berlangganan"]],["form",{action:"https://feedburner.google.com/fb/a/mailverify",class:"form-group",method:"post",onsubmit:"window.open('https://feedburner.google.com/fb/a/mailverify?uri=VaryaStore', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true",target:"popupwindow",style:"width:90%;margin:auto"},[["input",{class:"form-control form-control-sm",name:"email",placeholder:"Masukan alamat email anda",type:"email"}],["input",{name:"uri",type:"hidden",value:"VaryaStore"}],["input",{name:"loc",type:"hidden",value:"en_US"}],["br"],["button",{class:"btn btn-sm btn-block",type:"submit"},["Subscribe"]],["small",["Delivered by ",["a",{href:"https://feedburner.google.com",target:"_blank"},["FeedBurner"]]]]]]]]]],["br"],[{class:"row"},[[{class:"col-md-12 text-center"},[["small",["Copyright ©"+d+" ",["a",{href:init.homeUrl},[init.blogTitle]],". All rights reserved."]]]]]],["br"],]]];var r=0;if("item"==init.pageType){r=50;var e=["div",{id:"fb-root"},[]];b.push(e);(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=827893847412260&autoLogAppEvents=1';fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));}elConst(b,document.head);elConst(c,document.getElementById("main"));if("index"==init.pageType){if(init.srcLbl==undefined&&init.srcQry==undefined){elApp(init.api3Url+"/posts",{callback:"featTemp",labels:"featured",fetchImages:!0,maxResults:10,fields:"items(url,title,images,labels)",key:init.api3Key});}}if("static_page"==init.pageType){if("1740331895688944267"==init.pageId){r=10000;}}elApp(init.feedUrl+"/posts/summary",{callback:"navCat",alt:"json","max-results":r});}
		
		if("index"==init.pageType){
			 if(init.srcQry!=undefined){
				elApp(init.api3Url+"/posts/search",{callback:"initTemp",q:init.srcQry,fetchImages:!0,maxResults:15,fields:"kind,items(url,title,content,labels),nextPageToken",key:init.api3Key});
				function loadMoreQuery(b){
					b.innerHTML="<i class='fa fa-refresh fa-spin' style='font-size:20px'></i>";
					elApp(init.api3Url+"/posts/search",{callback:"loadMoreTemp",q:init.srcQry,fetchImages:!0,maxResults:15,fields:"items(url,title,content,labels),nextPageToken",key:init.api3Key,pageToken:window.sessionStorage.getItem("token")});
				};
			}else if(init.srcLbl!=undefined){
				elApp(init.api3Url+"/posts",{callback:"initTemp",labels:init.srcLbl,fetchImages:!0,maxResults:15,fields:"kind,items(url,title,images,labels),nextPageToken",key:init.api3Key});
				function loadMoreQuery(b){
					b.innerHTML="<i class='fa fa-refresh fa-spin' style='font-size:20px'></i>";
					elApp(init.api3Url+"/posts",{callback:"loadMoreTemp",labels:init.srcLbl,fetchImages:!0,maxResults:15,fields:"items(url,title,images,labels),nextPageToken",key:init.api3Key,pageToken:window.sessionStorage.getItem("token")});
				};
			}else{
				elApp(init.api3Url+"/posts",{callback:"initTemp",fetchImages:!0,maxResults:15,fields:"kind,items(url,title,images,labels),nextPageToken",key:init.api3Key});
				function loadMoreQuery(b){
					b.innerHTML="<i class='fa fa-refresh fa-spin' style='font-size:20px'></i>";
					elApp(init.api3Url+"/posts",{callback:"loadMoreTemp",fetchImages:!0,maxResults:15,fields:"items(url,title,images,labels),nextPageToken",key:init.api3Key,pageToken:window.sessionStorage.getItem("token")});
				};
			}
		}
		if("item"==init.pageType){
			elApp(init.api3Url+"/posts/"+init.postId,{callback:"initTemp",fields:"id,url,title,content,labels,published",key:init.api3Key});
		}
		if("static_page"==init.pageType){
			elApp(init.api3Url+"/pages/"+init.pageId,{callback:"initTemp",fields:"id,url,title,content,published",key:init.api3Key});
		}
		if("error_page"==init.pageType){
			elApp(init.api3Url+"/posts/bypath",{callback:"initTemp",path:init.pathUrl,key:init.api3Key});
		}		
		
	/*]]>*/