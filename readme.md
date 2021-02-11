# Dinamic Slider

This is a very simple slider component for a web application. It shows the latest products that a REST API returns from it's endpoint. If the data base is updated and new products are added to it, the slider also gets updated and does not need to be changed to show the new products.

## How does it work?

To start, the JavaScript makes a HTTP request to a REST API. I used JSONPlaceholder for Fake JSON data. Then, the response array gets sorted and just uses the last 3 objects, although, you can use the last 4, 5, 6 or any amount of objects you need.

Then, the objects go into the carrousel, and Bootstrap does its magic.

## What did i use?

* JavaScript
* jQuery - To make everything more readable, but just the selectors and its append method.
* AJAX - To make an asynchronous request
* JSONPlaceholder - Which provides fake JSON data, but you can use any REST API. Here you can find this one https://jsonplaceholder.typicode.com/
* Bootstrap - To make the slider, which only takes a few clases in the HTML, so it's very simple.
* Freepik, a web page from Adobe that gives you free stock images for testing. You can find it here: https://www.freepik.es/

## Can I use it? License?

It is just a proyect that I made for entretainment, after having to do something similar for work. I don't intent to sell this or use it in any commercial way, so you are free to download, test, modify, share and use it in any way you want.

### OpenSource License: GNU General Public License (GPL)
