gulppartials
============

Gulp Config for compiling parital less files into main file

Gulp Setup for watching parital files, and then compiling the master file.


master.less

@import('_a.less');
@import('_b.less);
@import('_c.less);

partials/filename
_a.less
_b.less
_c.less


Script Watches the paritals, and if there is a change or addition then recompiles the master.less.

Simples :->
