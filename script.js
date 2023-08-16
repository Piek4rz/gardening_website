var grid = document.querySelector('.masonry-grid');

var msnry = new Masonry( grid, {
  itemSelector: '.masonry-grid-item',
  columnWidth: '.masonry-grid-sizer',
  gutter: '.masonry-gutter-sizer',
  percentPosition: true,
});

imagesLoaded( grid ).on( 'progress', function() {
  msnry.layout();
});
