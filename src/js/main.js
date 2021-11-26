let API = "https://blockchain.info/rawblock";
let blockData = {};

function showBlock(data) {
  $("#block_header").html(`Hash: ${data.hash}`);
  $("#block_height").html(`<p>Block Height: ${data.height}</p>`);
  $("#block_time").html(`<p>Block Time: ${data.time}</p>`);
  $("#block_size").html(`<p>Block Size: ${data.size}</p>`);
  $("#block_transactions").html(`<p>Transactions: ${data.n_tx}</p>`);
  $("#block_previous").html(`<p>Previous Block: ${data.prev_block}</p>`);
  $("#block_next").html(`<p>Next Block: ${data.next_block}</p>`);
}

function getBlock() {
  let block = $("#block_input").val();

  if (block.length == 0) {
    API = `https://blockchain.info/latestblock/`;
    $("#status").html("<h2>Please enter an integer.</h2>");
  } else {
    $.get(`${API}/${block}`, function getData(data) {
      showBlock(data);
      blockData = data;
      $("#block").css("display", "block");
    });
    $("#status").html("");
  }

}

function unFamilar() {
  $("#familiar").css("display", "block");
}

function showTransactions() {
  let transactions = blockData.tx;
  let transactionsHTML = ""

  for (let tx of transactions) {
    transactionsHTML = tx['hash'];
    console.log(tx);
    $("#transaction-list").append(`<ul>${transactionsHTML}<div id="transactions_details"></div></ul>`);
  }
  $("#transactions").css("display", "block");
}
