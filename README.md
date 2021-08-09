# Spoofari

An experiment in exploiting people's muscle-memory, to demonstrate that it
could be used to steal their data.

In iOS 15, the UI chrome has moved to the bottom of the screen. Significantly,
the space where the UI chrome used to be (at the top of the screen) is now
a HTML content area.

We can put fake iOS-14-style UI chrome in this location. People who have not
yet adjusted to iOS-15 UI — and it will take some time — can be fooled into
thinking that they are at a secure site.

We could take this a step further, by capturing any URL entered into this
search input and showing another fake site, basically trapping the user in
a fake web that looks convincingly real.

Of course, anyone who is not using Safari for iOS 15 can be redirected to
the real site immediately.


## Example

https://josephpearson.org/experiments/spoofari


## Screenshots

<table>
  <tr>
    <th>iOS 15</th>
  </tr>
  <tr>
    <td>
      <img src="https://camo.githubusercontent.com/4495090294da16ae83f4bdb9b9867fee97d2195b758619c638964e1eab40ed52/68747470733a2f2f6a6f7365706870656172736f6e2e6f72672f6578706572696d656e74732f73706f6f666172692f73637265656e73686f74732f696f7331352e6a7067" alt="iOS 15" width="375" height="812" style="min-width=375px" />
    </td>
  </tr>
</table>

<table>
  <tr>
    <th>iOS 14</th>
  </tr>
  <tr>
    <td>
      <img src="https://camo.githubusercontent.com/473b09e69760b29cc3444ae6bc7ccaa23c11eeeec088378d1b1fa125fd0624a9/68747470733a2f2f6a6f7365706870656172736f6e2e6f72672f6578706572696d656e74732f73706f6f666172692f73637265656e73686f74732f696f7331342e6a7067" alt="iOS 14" width="375" height="812" style="min-width=375px" />
    </td>
  </tr>
</table>


