const ItemManager = artifacts.require("./ItemManager.sol");

contract("ItemManager", accounts => {
    it ("... should be able to add on item", async () => {
        const ItemManagerInstance = await ItemManager.deployed();
        const itemName ="test1";
        const itemPrice = 500;

        const result = await ItemManagerInstance.createItem(itemName, itemPrice, {from: accounts[0]});
        assert.equal(result.logs[0].args._itemIndex, 0, "it's not the first item");

        const item = await ItemManagerInstance.items(0);
        assert.equal(item._identifier, itemName, "The identifier was diffrent");
    });
});
