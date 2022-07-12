const form = $("form");
function displayGif(randomGifObj) {
    $("div").prepend(`<img src=${randomGifObj.images.original.url}>`);
  }
async function getGif(query) {
  const apiKey = "Gc5OkjiFBiWOP9qbnPGOMCIEPIRRg2Pv";
  const results = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { api_key: apiKey, q: query },
  });
  let randNum = Math.floor(Math.random() * 50);
  displayGif(results.data.data[randNum]);
}
form.on("submit", function (e) {
  e.preventDefault();
  let $input = $("input");
  getGif($input.val());
  $input.val('')
});
const clear = $('#clear');
clear.on('click', function () {
    let imgs = $('img');
    imgs.remove()
})

