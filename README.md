# Capture Isolated Inputs

A cleaner and whole new different out-of-the-box approach to capture PINs or isolated key inputs.

It can be used with a plain JavaScript project as well. Just look at the code, should be very easy to leverage.

`Although It discourages a blind copy/paste of the code. Should be analysed and used conciously.`

## Why not use equivalent number of Input boxes?

Not using input boxes makes thing much easier. Here are the issues that I faced with input boxes :

- Unnecessary flexbility to users to navigate across the boxes.
- Lag observed while moving the focus to next/previous sibling boxes.
- Too many scenario handling resulting in much larger & complex code than this.

![Capture PIN](https://github.com/jhaspider/react-capture-pin/blob/main/public/capture_pin.png)

## Customise to support text

Change below line in `capture_input.js` to following regular expression :

```sh
const only_alpha_pattern = /[0-9]/g;
```
