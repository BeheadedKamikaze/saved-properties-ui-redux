# Specification
You are given the following JSON object which will serve as mock back­end data:
```json
{

    "results": [{
        "price": "$726,500",
        "agency": {
            "brandingColors": {
                "primary": "#ffe512"
            },
            "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
        },
        "id": "1",
        "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
    }, {
        "price": "$560,520",
        "agency": {
            "brandingColors": {
                "primary": "#fcfa3b"
            },
            "logo": "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
        },
        "id": "2",
        "mainImage": "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
    }, {
        "price": "$826,500",
        "agency": {
            "brandingColors": {
                "primary": "#57B5E0"
            },
            "logo": "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
        },
        "id": "3",
        "mainImage": "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
    }],

    "saved": [{
        "price": "$526,500",
        "agency": {
            "brandingColors": {
                "primary": "#000000"
            },
            "logo": "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"
        },
        "id": "4",
        "mainImage": "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
    }]
}
```
Display the list of properties using the data set within the “results" array running down the page in a column that has a heading labeled **Results**.
There will be a second column with a heading **Saved Properties**, along side the **Results** column. It will contain the initial property within the “saved" array

Hovering over a property card in the **Results** column will display an ’add’ button. Clicking the ‘add’ button will create the property in the **Saved Properties** column.
Hovering over a property card in the **Saved Properties** column will display a 'remove’ button. Clicking the ‘remove' button will remove the property from the list of saved properties.

A diagram of a potential users flow is illustrated below: Take note of the ID’s and the flow to get an idea of the User experience.

![UX Diagram](img/coding-test-ux.png?raw=true)

## What we are looking for:

- Code separated into Modules where appropriate. (AMD/Commonjs/ES6) etc
- Logical sequence of commits so we can see how you came to the solution.
- Testing, (Capturing the business logic of the above requirements) or at the very least around the adding and removing of data.
- Instructions on building the project and some documentation. 