/*
    Assignment 05 - João Vitor Santana Ebrenz (0779042)
*/

$(document).ready(function () {
    class ContentItem {
        constructor(id, title, description, categoryGenre) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.categoryGenre = categoryGenre;
        };

        updateContentItem(id, title, description, categoryGenre) {
            if (id == this.id) {
                if ((title || description || categoryGenre) == !null) {
                    ContentItem.title = this.title;
                    ContentItem.description = this.description;
                    ContentItem.categoryGenre = this.categoryGenre;
                } else {
                    return;
                }
            }
        };

        toString() {
            return `<div class='content-item-wrapper' id='content-item-0'">
            <h2>${this.title}</h2>
            <p>${this.description}</p>
            <div>${this.categoryGenre}</div>
            </div>`
        }

    }

    let item1 = new ContentItem("1", "Real Madrid", "Best football team in Spain", "UEFA");
    let item2 = new ContentItem("2", "Ajax", "Best football team in Netherlands", "UEFA");
    let item3 = new ContentItem("3", "Bayer Munchen", "Best football team in Germany", "UEFA");
    let item4 = new ContentItem("4", "Juventus", "Best football team in Italy", "UEFA");
    let item5 = new ContentItem("5", "Paris St Germain", "Best football team  in France", "UEFA");

    $("div#content-item-list").append(item1.toString());
    $("div#content-item-list").append(item2.toString());
    $("div#content-item-list").append(item3.toString());
    $("div#content-item-list").append(item4.toString());
    $("div#content-item-list").append(item5.toString());

    $("div.content-item-wrapper").css(
        {
            "border": "solid black 1px",
            "margin-top": "15px",
            "padding": "25px",
            "margin": "auto",
            "margin-bottom": "15px",
            "width": "70%",  
        });

});
