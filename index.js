function myFunction() {
  const x = document.querySelector("ul");
        x.style.display = x.style.display === "block" ? "none" : "block";
        x.style.animation = "show-menu 3s ease-in-out";
}





function form(){

          const input = document.getElementById("input");
          const label = document.getElementById("label");
                input.addEventListener("input", () => {
          if (input.value.length > 0) {
          input.style.backgroundColor = "red";
          input.style.opacity = 1;

          label.style.marginTop = "-55px";
          label.style.transition = "1s ease-in-out";
          label.style.zIndex = 1;
          label.style.fontSize = "15px";
          label.style.backgroundColor = "rgb(0, 255, 106)";
          label.style.padding = "3px";
          label.style.borderRadius = "5px";
          } 
          else { 
          input.style.opacity = 1; 
          label.style.marginTop = "0";
          label.style.zIndex = -1;
          label.style.fontSize = "x-large";
          label.style.padding = "0px";
          label.style.borderRadius = "0px";
          input.style.background = "none";
          label.style.background = "none";
          }
          });
        const input1 = document.getElementById("input1");
        const label1 = document.getElementById("label1");
              input1.addEventListener("input", () => {
      if (input1.value.length > 0) {
        input1.style.backgroundColor = "red";
        input1.style.opacity = 1;

        label1.style.transition = "1s ease-in-out";
        label1.style.marginTop = "-55px";
        label1.style.zIndex = 1;
        label1.style.fontSize = "15px";
        label1.style.backgroundColor = "rgb(0, 255, 106)";
        label1.style.padding = "3px";
        label1.style.borderRadius = "5px";
      } 
      else { 
        input1.style.opacity = 1; 
        label1.style.marginTop = "0";
        label1.style.zIndex = -1;
        label1.style.fontSize = "x-large";
        label1.style.padding = "0px";
        label1.style.borderRadius = "0px";
        input1.style.background = "none";
        label1.style.background = "none";
      }
        });
      const input2 = document.getElementById("input2");
      const label2 = document.getElementById("label2");
            input2.addEventListener("input", () => {
        if (input2.value.length > 0) {
          input2.style.backgroundColor = "red";
          input2.style.opacity = 1;

          label2.style.transition = "1s ease-in-out";
          label2.style.marginTop = "-55px";
          label2.style.zIndex = 1;
          label2.style.fontSize = "15px";
          label2.style.backgroundColor = "rgb(0, 255, 106)";
          label2.style.padding = "3px";
          label2.style.borderRadius = "5px";
          // label.classList.add = ("label1");
        } 
        else { 
          input2.style.opacity = 1; 
          label2.style.marginTop = "0";
          label2.style.zIndex = -1;
          label2.style.fontSize = "x-large";
          label2.style.padding = "0px";
          label2.style.borderRadius = "0px";
          input2.style.background = "none";
          label2.style.background = "none";
          

        }
      });
const input3 = document.getElementById("input3");
const label3 = document.getElementById("label3");
      input3.addEventListener("input", () => {
if (input3.value.length > 0) {
input3.style.backgroundColor = "red";
input3.style.opacity = 1;

label3.style.transition = "1s ease-in-out";
label3.style.animationName = "changeMargin";
label3.style.marginTop = "-8px";
label3.style.zIndex = 1;
label3.style.fontSize = "15px";
label3.style.backgroundColor = "rgb(0, 255, 106)";
label3.style.padding = "5px";
label3.style.borderRadius = "3px";
} 
else { 
input3.style.opacity = 1; 
label3.style.marginTop = "25px";

label3.style.zIndex = -1;
label3.style.fontSize = "x-large";
label3.style.padding = "0px";
label3.style.borderRadius = "0px";
input3.style.background = "none";
label3.style.background = "none";


}
});
  
const cont_head_btn = document.getElementById("cont_head_btn");
const contact_head_baner = document.getElementById("contact_head_baner");
const cont_head_animated_baner = document.getElementById("cont_head_animated_baner");
    cont_head_animated_baner.addEventListener("mouseover", () =>
      {
        cont_head_animated_baner.style.marginTop = "-185px";
        cont_head_animated_baner.style.transition = "1.5s ease-in-out";
        cont_head_animated_baner.style.borderBottom = "2px solid crimson";
        cont_head_animated_baner.style.borderLeft = "2px solid crimson"; 
      })
    cont_head_btn.addEventListener("mouseover", () =>
      {
        cont_head_animated_baner.style.marginTop = "-185px";
        cont_head_animated_baner.style.transition = "1.5s ease-in-out";
        cont_head_animated_baner.style.borderBottom = "2px solid crimson";
        cont_head_animated_baner.style.borderLeft = "2px solid crimson"; 
      })
    contact_head_baner.addEventListener("mouseover", () =>
      {
        contact_head_baner.src = "img/contact-banner1.png";
        contact_head_baner.style.zIndex = "2";
        cont_head_animated_baner.style.zIndex = "1";
        cont_head_animated_baner.style.marginTop = "-185px";
        cont_head_animated_baner.style.transition = "1.5s ease-in-out";
        cont_head_animated_baner.style.borderBottom = "2px solid crimson";
        cont_head_animated_baner.style.borderLeft = "2px solid crimson"; 
      })
    contact_head_baner.addEventListener("mouseout", () =>
      {
        contact_head_baner.src = "img/contact-banner.png";
        cont_head_animated_baner.style.marginTop = "-385px";
        cont_head_animated_baner.style.transition = "1s ease-in-out";
        cont_head_animated_baner.style.borderBottom = "0px";
        cont_head_animated_baner.style.borderLeft = "0px"; 
      })
    cont_head_animated_baner.addEventListener("mouseout", () =>
      {
        contact_head_baner.src = "img/contact-banner.png";
        cont_head_animated_baner.style.marginTop = "-385px";
        cont_head_animated_baner.style.transition = "1s ease-in-out";
        cont_head_animated_baner.style.borderBottom = "0px";
        cont_head_animated_baner.style.borderLeft = "0px";  
      })


}

function aside() {
  var list_newpost = document.getElementById("list_newpost");
  var list_shemotavazebuli = document.getElementById("list_shemotavazebuli");
  var list_kategoria = document.getElementById("list_kategoria");
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
                for(i=0; i<=10; i++){
            var  iconid = i;
            var  liid = i;
       }

        data.shemotavazebuli.forEach(item => {
       var icon = document.createElement("img");
            icon.id = "icon" + iconid--;
          var li = document.createElement("li");
              li.id = "li" + liid--;
              var link = document.createElement("a");
              icon.src = item.icon;
              link.href = "blank.html";
              li.innerText = item.saxeli;
            li.addEventListener("click", ()   => callFunction(item));
            link.append(icon, li);
            list_shemotavazebuli.append(link);
});

data.kategoria[0].gancxadeba
        .slice(0, 6)
        .forEach(item => {
          var icon = document.createElement("img");
          icon.id = "icon" + iconid--;

          var li = document.createElement("li");
          var link = document.createElement("a");
              link.href = "blank.html";
              li.innerText = item.saxeli;
              icon.src = item.icon;
            link.append(icon, li);
            li.addEventListener("click", () => callFunction(item));
            list_newpost.append(link);
        });
      data.kategoria.forEach((item, index) => {
        var li = document.createElement("li");
        var link = document.createElement("a");
            link.href = "post.html";
            li.innerText = "კატეგორიები " + item;
          link.append(li);
          li.addEventListener("click", () => callFunction(item));
          list_kategoria.append(link);
      });
    })
    .catch(error => console.error("Error fetching JSON:", error));
}

function footer(){

  var footer_meniu = document.getElementById("footer_meniu");
  var footer_contact = document.getElementById("footer_contact");
  var footer_admin = document.getElementById("footer_admin");

  fetch("data.json")
  .then(response => response.json())
  .then(data => {

      data.meniu.slice(0, 3).forEach(item => {
        
        var menu_li = document.createElement("li");
        var menu_link = document.createElement("a");
            menu_li.innerText = item.saxeli;
            menu_link.href = item.link; 
            footer_meniu.append(menu_link);
            menu_link.append(menu_li);

      });       
      data.contact.forEach(item => {
        var menu_li = document.createElement("li");
        var menu_link = document.createElement("a");
            menu_link.href = "#";
            menu_li.innerText = item.saxeli;
            footer_contact.append(menu_link);
            menu_link.append(menu_li);

      });       
      data.contact.forEach(item => {
        var menu_li = document.createElement("li");
        var menu_link = document.createElement("a");
            menu_link.href = "#";
            menu_li.innerText = item.saxeli;
            footer_admin.append(menu_link);
            menu_link.append(menu_li);
      });       

  })
  .catch(error => console.error("Error fetching JSON:", error));
}


function mtavari() {

  const block0 = document.getElementById("section_chvensshesaxeb");
  const block = document.getElementById("section_newpost");
  const block1 = document.getElementById("section_shemotavazebuli");
  const block2 = document.getElementById("section_gundi");
  const createSection = (sectionBlock, title) => {
  const div = document.createElement("div");
        div.className = "sectionid";
        div.innerText = title;
    sectionBlock.append(div);
  };

  createSection(block0, "ჩვენს შესახებ");
  createSection(block, "უახლესი განცხადებები");
  createSection(block1, "შემოთავაზებული");
  createSection(block2, "გუნდის წევრები");
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const createArticle = (sectionBlock, item) => {
        const article = document.createElement("article");
        const h1 = document.createElement("h1");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const button = document.createElement("button");
        const imgdiv = document.createElement("div");
        const conteiner = document.createElement("div");
              imgdiv.className= "imgdiv";
              conteiner.className = "conteiner";
        h1.innerText = item.saxeli;
        img.src = item.foto;
        p.innerText =
          item.agwera.length > 100
            ? item.agwera.substring(0, 100) + "..."
            : item.agwera;
        button.innerText = "მეტის ჩვენება";
        sectionBlock.append(article);
        imgdiv.append(img);
        conteiner.append(h1, p, button);
        article.append(imgdiv, conteiner); 
        article.id = item.saxeli;
      };

      data.kategoria[0].gancxadeba.slice(0, 3).forEach((item) => {
        createArticle(block, item);
      });

      data.shemotavazebuli.slice(0, 3).forEach((item) => {
        createArticle(block1, item);
      });
      var button = document.createElement("button");
          button.id = "btn_gundi";
          button.innerText= "ყველას ჩვენება";

      data.gundi.forEach((item) => {
        var article = document.createElement("article");
        var img = document.createElement("img");
        var h1 = document.createElement("h1");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p");
        var p6 = document.createElement("p");
        var imgdiv = document.createElement("div");
            imgdiv.className = "imgdiv";
            img.src = item.foto;
          h1.innerText = item.saxeli;
          p1.innerText = item.pozicia;
          p2.innerText = item.ganatleba;
          p3.innerText = item.gamocdileba;
          p4.innerText = item.telfoni;
          p5.innerText = item.misamarti;
          p6.innerText = item.meili;
              imgdiv.append(img);
              article.append(imgdiv, h1,p1,p2,p3,p4,p5,p6)
              block2.append(article, button);
      });
      
            data.chvens_shesaxeb.forEach((item) => {
              var article = document.createElement("article");
              var p = document.createElement("p");
              var div = document.createElement("div");
                  div.id = "divabout";
              var button = document.createElement("button");
              var imgdiv = document.createElement("div");
              var img = document.createElement("img");
                  imgdiv.className ="imgdiv";
                  img.src = item.foto;
                p.innerText = item.agwera;
                button.innerText = "გაიგე მეტი";
                    imgdiv.append(img);
                    p.append(button);
                    div.append(p);
                    article.append(imgdiv,div);
                    block0.appendChild(article);
      });
    });
}


function gallery() {
  var section_gallery = document.getElementById("gallery");
  var close_player = document.getElementById("close_icon");
  var galleryLength;
  var data;

  fetch("data.json")
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
      galleryLength = data.gallery.length;

      
        data.gallery.forEach(item => {
          var img_conteiner = document.createElement("div");
              img_conteiner.className = "img_conteiner";
          var img_gallery = document.createElement("img");
              img_gallery.src = item.foto;
              section_gallery.append(img_conteiner);
              img_conteiner.append(img_gallery);

              img_gallery.addEventListener("load", function () {
              var height = img_gallery.height;
              var width = img_gallery.width;
            if (width >= height) {
              var sxvaoba = width / 260;
              var newwidth = 260;
              var newheigth = height / sxvaoba;
                  img_gallery.style.width = newwidth + "px";
                  img_gallery.style.height = newheigth + "px";
                                } 
            else if (width <= height) {
              var sxvaoba = height / 260;
              var newheigth = 260;
              var newwidth = width / sxvaoba;
                  img_gallery.style.width = newwidth + "px";
                  img_gallery.style.height = newheigth + "px";
                                      }
                                          });
                  close_player.addEventListener("click", function () {
                  player.style.display = "none";

                                              });
                  img_gallery.addEventListener("click", function () {
              var player = document.getElementById("player");
                  player.style.display = "flex";

              var sampimg = document.getElementById("img");
              var show_img = document.createElement("img");
                  show_img.className =  "show_img";

                  show_img.src = item.foto;
                  sampimg.innerHTML = "";
                  sampimg.append(show_img);
            var prev = document.getElementById("prev");
            var next = document.getElementById("next");

                prev.addEventListener("click", function () {
            var currentIndex = data.gallery.findIndex(function (
                item
              ){
                return item.foto === show_img.src;
              });
            var newIndex = currentIndex --;
              if (newIndex < 0) {
                  newIndex = galleryLength --;
              }
                show_img.src = data.gallery[newIndex].foto;
                                                          });

                next.addEventListener("click", function () {
            var currentIndex = data.gallery.findIndex(function (
                item
              ) {
                return item.foto === show_img.src;
              });
            var newIndex = currentIndex +1;
              if (newIndex <= 6) {
                  newIndex = galleryLength ++;
                                  }                     
                show_img.src = data.gallery[newIndex].foto;
                                                            });

                  // show_img.addEventListener("load", function () {
                  //   var player = document.getElementById("player");
                  //   var show_img_done = document.getElementsByClassName("show_img");

                  //   var playerimg_heigth = show_img.height;
                  //   var playerimg_width = show_img.width;


                  //   var player_heigth = player.offsetHeight;
                  //   var player_width = player.offsetWidth;

                  //   console.log("img" + "" , playerimg_heigth, playerimg_width);
                  //   console.log("player" + "" ,player_heigth, player_width);

                  //   if(player_width >= playerimg_width)
                  //   {

                  //     show_img_done.style.width = "100%";
                  //   }

                  // // if (width >= height) {
                  // //   var sxvaoba = width / 260;
                  // //   var newwidth = 260;
                  // //   var newheigth = height / sxvaoba;
                  // //       img_gallery.style.width = newwidth + "px";
                  // //       img_gallery.style.height = newheigth + "px";
                  // //                     } 
                  // // else if (width <= height) {
                  // //   var sxvaoba = height / 260;
                  // //   var newheigth = 260;
                  // //   var newwidth = width / sxvaoba;
                  // //       img_gallery.style.width = newwidth + "px";
                  // //       img_gallery.style.height = newheigth + "px";
                  // //                           }
                          
                  //   });
                                          
                                          
                                                                      });
      });
       
    })
    .catch(error => console.error("Error fetching JSON:", error));
}

function news(){
  const block0 = document.getElementById("migwevebi");
  const block = document.getElementById("proeqtebi");
  const block1 = document.getElementById("gegmebi");
  const block2 = document.getElementById("megobrebi");
  const createSection = (sectionBlock, title) => {
  const div = document.createElement("div");
        div.className = "sectionid";
        div.innerText = title;
    sectionBlock.append(div);
  };

  createSection(block0, "ჩვენი მიღწევები");
  createSection(block, "მინდინარე პროექტები");
  createSection(block1, "სამომავლო გეგმები");
  createSection(block2, "მეგობარ ორგანიზაციები");



fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        const createArticle = (sectionBlock, item) => {
        const article = document.createElement("article");
        const h1 = document.createElement("h1");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const button = document.createElement("button");
        const imgdiv = document.createElement("div");
        const conteiner = document.createElement("div");
              imgdiv.className= "imgdiv";
              conteiner.className = "conteiner";
        h1.innerText = item.saxeli;
        img.src = item.foto;
        p.innerText =
          item.agwera.length > 100
            ? item.agwera.substring(0, 100) + "..."
            : item.agwera;
        button.innerText = "მეტის ჩვენება";
        sectionBlock.append(article);
        imgdiv.append(img);
        conteiner.append(h1, p, button);
        article.append(imgdiv, conteiner); 
        article.id = item.saxeli;
      };

      data.kategoria[0].migwevebi.slice(0, 3).forEach((item) => {
        createArticle(block0, item);
      });

      data.kategoria[0].gegmebi.slice(0, 3).forEach((item) => {
        createArticle(block1, item);
      });

      data.kategoria[0].megobrebi.slice(0, 3).forEach((item) => {
        createArticle(block2, item);
      });

      data.kategoria[0].proeqtebi.slice(0, 3).forEach((item) => {
        createArticle(block, item);
      });

    });
  
  }

function about(){

  const block0 = document.getElementById("chveni_skolis_shesaxeb");
  const block1 = document.getElementById("gamorcheuli_maswavleblebi");
  const block2 = document.getElementById("warmatebuli_moswavleebi");
  const block3 = document.getElementById("chveni_migewvwbi");
  const createSection = (sectionBlock, title) => {
  const div = document.createElement("div");
        div.className = "sectionid";
        div.innerText = title;
        div.style.color = "white";
    sectionBlock.append(div);
  };

  createSection(block0, "ჩვენი სკოლის შესახებ");
  createSection(block1, "გამორჩეული მასწავლებლები");
  createSection(block2, "წარმატებული მოსწავლეები");
  createSection(block3, "ჩვენი მიღწევების შესახებ");

  fetch("data.json")
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
      const createArticle = (sectionBlock, item) => {
    var article = document.createElement("article");
    var p = document.createElement("p");
    var button = document.createElement("button");
    var imgdiv = document.createElement("div");
    var img = document.createElement("img");
        imgdiv.className ="imgdiv";
        img.src = item.foto;
      p.innerText = item.agwera;
      button.innerText = "გაიგე მეტი";
          imgdiv.append(img);
          p.append(button);
          article.append(imgdiv, p);
          sectionBlock.append(article);
      }
      data.chvens_shesaxeb.forEach((item) => {
        createArticle(block0, item);
      });
      data.chvens_shesaxeb.forEach((item) => {
        createArticle(block1, item);
      });
      data.chvens_shesaxeb.forEach((item) => {
        createArticle(block2, item);
      });
      data.chvens_shesaxeb.forEach((item) => {
        createArticle(block3, item);
      });

    });
}


  
function callFunction(item) {
  var block = document.getElementById("section");
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      var article = document.createElement("article");
      var h1 = document.createElement("h1");
      var p = document.createElement("p");
      var img = document.createElement("img");
      article.style.width = "90%";
      article.style.margin = "5%";
      h1.innerHTML = item.saxeli;
      p.innerHTML = item.agwera;
      img.src = item.foto;
      article.append(img, h1, p);
      block.appendChild(article);
    });
}

