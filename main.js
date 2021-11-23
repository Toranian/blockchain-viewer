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
  }

  if (block.length == 0) {
    $("#status").html("<h2>Please enter an integer.</h2>");
  } else {
    $("#status").html("<h2>Loading...</h2>");
    $("#block").css("display", "block");
    $.get(`${API}/${block}`, function getData(data) {
      console.log(data);
      showBlock(data);
      blockData = data;
    });
    $("#status").html("");
  }
}

function unFamilar() {
  console.log("unfamilar");

  let unFamiliarText = `
  <p id="info">So it appears that you don't know what Bitcoin is. That's fine! I won't judge you my guy. Bitcoin is a decentralized crypto currency that shows all transactions on a public ledger. </p><br><p>To view a block on the Bitcoin blockchain, enter an integer from 0 to aroudn 700,000 for best results.</p>
  `;
  $("#familiar").html(unFamiliarText);
}

function showTransactions() {
  let transactions = blockData.tx;
  let transactionsHTML = "";
  console.log(transactions);
  for (let tx in transactions) {
    // transactionsHTML += `<p>Transaction: ${tx[0]["hash"]}</p>`;
    console.log(tx[0]['hash']);
  }
  console.log(transactionsHTML);
  $("#transactions").html(transactionsHTML);
}
