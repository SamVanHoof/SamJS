# Sam.js - Seriously Awesome Modules

### installation
```sh
yarn add samjs-components
```

## Cookie Toaster - Makes tasty cookies for React.

### use
In your root component:
```js
import {CookieToaster} from 'samjs-components'
...
<CookieToaster />
...
```

To modify the css you can use the following structure:
```scss
.cookie-toaster { // or cookie-toaster-modal, cookie-toaster-top
   // topmost div
  .cookie-container {
    // inner content

    h1{
      // title css
    }

    p{
      // text css
    }

    a{
      // link css
    }

    button {
      // button css
    }
  }
}
```

### components
- CookieToaster
- CookieToasterTop
- CookieToasterModal

### props
- title: String, title (duh)
- text: String, content
- btnAcceptText: String, button label
- btnDeclineText: String, button label
- accept: function, callback to handle accept
- decline: function, callback to handle decline
- popped: Boolean, set this property in your localstorage to track if cookie has been shown for the user
- linkUrl: String, a url
- linkText: String, the text to display for the link
- type: 'top', 'bottom', or 'modal'

### localStorage
 - cookieHasPopped: cookie has been shown