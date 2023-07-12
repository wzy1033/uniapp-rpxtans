document.addEventListener("DOMContentLoaded", function () {
    const originalWidthInput = document.getElementById("originalWidth");
    const originalHeightInput = document.getElementById("originalHeight");
    const convertedWidthInput = document.getElementById("convertedWidth");
    const convertedHeightInput = document.getElementById("convertedHeight");
    const copyButton = document.getElementById("copyButton");

    originalWidthInput.addEventListener("input", updateConvertedSize);
    originalHeightInput.addEventListener("input", updateConvertedSize);

    copyButton.addEventListener("click", copyValues);

    function updateConvertedSize() {
      const originalWidth = parseInt(originalWidthInput.value);
      const originalHeight = parseInt(originalHeightInput.value);

      const convertedWidth = Math.round((originalWidth * 750) / 390);
      const convertedHeight =
        Math.round((convertedWidth * originalHeight) / originalWidth) || 0;

      convertedWidthInput.value = convertedWidth;
      convertedHeightInput.value = convertedHeight;
    }

    function copyValues() {
      const copyText =
        "width: " +
        convertedWidthInput.value +
        "rpx;\nheight: " +
        convertedHeightInput.value +
        "rpx;";

      navigator.clipboard.writeText(copyText);
    }
  });