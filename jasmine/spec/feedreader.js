
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
         it('has a defined URL', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
            });
         });

         it('has a defined name', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.name).toBeDefined();
              expect(feed.name.length).not.toBe(0);
            });
         });
    });

    describe('The menu', function() {
        var body = $('body');

         it('menu element should be hidden by default', function() {
           expect(body.hasClass('menu-hidden')).toBe(true);
         });

          it('menu changes visibility when icon is clicked', function() {
            var menuIcon = $('.menu-icon-link');

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
          });
    });

    describe('Initial Entries', function() {

         beforeEach(function(done) {
          loadFeed(0, function() {
            done();
          });
        });

        it('should have at least one .entry element within .feed container', function(done) {
          var entry = $('.feed .entry');
          expect(entry.length).not.toBe(0);
          done();
        });
    });

    describe('New Feed Selection', function() {
        var feed1, feed2;

         beforeEach(function(done) {
            loadFeed(0, function() {
              feed1 = $('.feed').html();
              loadFeed(1, function() {
                done();
              });
          });
        });

        it('should change the content when a new feed is loaded', function(done) {
          feed2 = $('.feed').html();
          expect(feed1).not.toBe(feed2);
          done();
        });
    });
}());
