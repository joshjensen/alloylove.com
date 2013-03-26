Alloylove.com
-----

Hopefully this will become a quick and easy way to find all the Alloy love you love to love... but can't find.


SUBMITTING NEW LIBRARIES AND FRAMEWORKS:
-------

Want to add your own? Fork this site on GitHub, add your resource to data.json
and submit a pull request. When adding your source URL, please use an un-minified
file with a name that's unlikely to change (no version numbers).

### Using make / build ###

`make deps` will run `npm install --dev` to install the dependencies of the data compiler.

`make compile` will run the compiler. The compiler reads *data.json* and checks the *source* of
each entry.

You will see **warnings** where entries need to be checked and **errors** where entries will be
excluded.

If you wish to see details of all entries, you can run the `./build -v` command.

### All rights reserved ###

Please note that Alloylove.com is a curated site and that we reserve the right to refuse
any listing for any reason.

The [alloylove.com](http://alloylove.com) code/website is released under a MIT License.
