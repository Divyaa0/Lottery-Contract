pragma solidity 0.4.25;

contract lottery
{
    // manager will create lottery
    address public manager;
    
    //players address will be stores inside array of address
    address  [] public players;
    

    // any node entered :  their address will be submitted to manager 
    constructor() public
    {// stores acc sending ether
        manager=msg.sender;
    }

    // eneter function - wuser pays some ether to enter in lottery
    function enter() public payable 
    {
        // if require true : code below will execute
        // player must send money >0.1 ether (later be converted in wei)
        // to come in lottery(player array)
        require(msg.value > .01 ether,"transaction failed !");
        players.push(msg.sender);
    }


    function random() private view returns(uint)
    {
        // SHA256 is an instance of this keccak256
        // Choosing random number with the help of hash function where --time required to mine block, current time when
        //  function is beig executed and address of players
       return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));

    }
    // winner selection : random number % size of player array : Remainder will be the seleced winner index  
    function pickWinner() public includeThis
    {
        // only manager is allowed to invoke pickWinner function
        uint index= random() % players.length;
        
        // make this address apayable to send money
        //payable(players[index]).transfer(address(this).balance);

        address winner = players[index];
        winner.transfer(address(this).balance);
        
        // after sending winner money , clear the players array to restart the lottery next round
        players=new address[](0);
        
    }

    // this code will be added to every function where "includeThis" is called
    modifier includeThis ()
    {
         require(msg.sender == manager);
         _;
    }
   
    // return allplayers
    function getPlayers() public view returns (address[] memory)
    {
        return players;
    }
}