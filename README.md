## DESIGNR Figma Plugin

![image](./cover.png)

This is a figma plugin that helps us achieve better color consistency while we design.

## Installation

1. Go to [latest release](https://github.com/aboutjax/designr-figma-plugin/releases/latest) and download the source code.
2. Right click anywhere in Figma canvas → Plugins → Manage Plugins
3. At the right side of the screen, tap "+ Create your own plugin".
4. Tap "Link existing plugin" and choose the `manifest.json` file inside the folder you unzipped.
5. Open the plugin by:
   - right clicking anywhere on canvas → Plugins → Development → Wahoo Helper.
   - `cmd + /` to open Figma menu and search "helper".

## Check Colors

**What?**

Checks all the colours in the selected frame that aren't using the intended functional colors defined from our design library.

**Why?**

Because it's okay to design quickly with the color picker (we're all guity of this, don't lie). But this tool should help us clean up the mess afterwards.

**When?**

- Before handing off to developers.
- Before converting the frame to dark / light themes.

## Convert to Dark / Light Theme

**What?**

One click operation to convert the entire frame to Dark / Light theme function colours

**Why?**

Because doing it one by one under the native Figma "Selection Color" is laborious.

**When?**

Anytime, no restrictions.

## Auto Layout Spacings

Adjust auto layout spacings with spacing defined from our tokens. Visible when you have a Frame with Auto Layout enabled selected.

To run locally:

      $ npm install
      $ npx webpack
