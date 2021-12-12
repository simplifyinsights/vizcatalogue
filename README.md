# Viz Catalogue

This is a simple web application for my VizCatalogue site for my Tableau Tutorials

You can find this [Here](https://tabcat.toanhoang.com)

## Technology

This web application leverages [jQuery](https://jquery.com) (for interactivity) and [Materializecss](https://materializecss.com) as the front end framework i.e. Leveraging the Grid functionality and Cards.

## Website Text

This is an Excel file that is used to generate the "Cards".

- Column A: Title (The title that appears on the Card)
- Column B: Description 1 (The first part of the text when you click on the card)
- Column c: Description 2 (The second part of the text when you click on the card)
- Column D: URL (the link to the )
- Column E: Image (this is the image that will show on the card and will need to exist in the img directory)
- Column G-J: Hidden, but this contains the HTML segments that will make up the card, I have split this into individual pieces for ease of editing 
- Column L: This is the final HTML that will need to be copied between the <!-- Cards --> and <!-- End of Cards -->

## Install Guide

- Install Node.js and NPM
- Install Yarn
- Install Git

Once installed, clone this repository:

```sh
$ git clone https://github.com/simplifyinsights/vizcatalogue.git
```
run the following yarn command:
```sh
$ yarn install
```
