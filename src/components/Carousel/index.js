export function scrollCarousel(direction, carouselImagesElement, scrollAmount) {
    const containerWidth = carouselImagesElement.offsetWidth;
    const scrollIncrement = 290;

    if (direction === "left") {
        scrollAmount -= scrollIncrement;
    } else if (direction === "right") {
        scrollAmount += scrollIncrement;
    }

    if (scrollAmount < 0) {
        scrollAmount = 0;
    } else if (scrollAmount > carouselImagesElement.scrollWidth - containerWidth) {
        scrollAmount = carouselImagesElement.scrollWidth - containerWidth;
    }

    carouselImagesElement.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
    });

    return scrollAmount;
}