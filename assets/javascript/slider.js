(function () {
    $(document).ready(function () {
        var $carouselList, $width, currentItem, initLeft, numberOfItems, totalNumberOfItems;
        initLeft = 0;
        $width = 100;
        numberOfItems = 4;
        $carouselList = $('ul.carousel');
        totalNumberOfItems = $carouselList.children().size();
        currentItem = numberOfItems;
        $('a.next').on('click', function (e) {
                e.preventDefault();
            var left;
            left = parseInt($carouselList.css('left'));
            left = left - 200;
            if (currentItem === totalNumberOfItems) {
                left = initLeft;
                currentItem = numberOfItems;
            } else {
                currentItem += 1;
            }

            return $carouselList.animate({ 'left': left + 'px' }, 400);
        });
        return $('a.prev').on('click', function (e) {
                e.preventDefault();
            var left;
            left = parseInt($carouselList.css('left'));
            left = left + 200;
            if (currentItem === numberOfItems) {
                left = initLeft - 200 * (totalNumberOfItems - numberOfItems);
                currentItem = totalNumberOfItems;
            } else {
                currentItem -= 1;
            }

            return $carouselList.animate({ 'left': left + 'px' }, 400);
        });
    });
}.call(this));
