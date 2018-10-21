// Give coins
function giveCoins(amount) {
	playerManager.addNumData("Coin", amount);
}				
// Purchase a fish for free, max level
function freePurchase() {
			gameScript = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").scriptGamePaodao;
			if (gameScript.isPoolFull() || gameScript.state == gameScript.STATE.BuyItem) // Can user buy the item?
				return !1;
			gameScript.state = gameScript.STATE.BuyItem;
			var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"); // Get scene value
			n.playPurchaseSound();
			for (var i = 0; i < gameScript.scriptGameItemNode.length; i++) { // Loop through all inventory slots
				var a = gameScript.scriptGameItemNode[i]; // Get inventory slot
				if (1 == a.canPut()) { // Is the space in the inventory empty?
					var o = playerManager.getNumData("UnlockLevel") - 4; // Get the maximum unlock level minus 4
					o = 0 <= o ? o : 0, // If unlock level is below 0, set to 0.
					cc.log("unlockFish=" + o);
					var r = fish_data[o]
					  , s = playerManager.getObjData("Price" + o);
					cc.log("fishprice=" + s, a.addItemToPanel(o, 0),
					null != n.fishdialog && n.fishdialog.getComponent("fishlist-dialog").refreshCoin(playerManager.getObjData("Coin")),
					gameScript.refreshCoin());
					break
				}
			}
			gameScript.state = 0;
	}
				// Purchase a fish for free, max level
function freeMaxPurchase() {
			gameScript = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").scriptGamePaodao;
			if (gameScript.isPoolFull() || gameScript.state == gameScript.STATE.BuyItem) // Can user buy the item?
				return !1;
			gameScript.state = gameScript.STATE.BuyItem;
			var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"); // Get scene value
			n.playPurchaseSound();
			for (var i = 0; i < gameScript.scriptGameItemNode.length; i++) { // Loop through all inventory slots
				var a = gameScript.scriptGameItemNode[i]; // Get inventory slot
				if (1 == a.canPut()) { // Is the space in the inventory empty?
					var o = 44;
					cc.log("unlockFish=" + o);
					var r = fish_data[o]
					  , s = playerManager.getObjData("Price" + o);
					cc.log("fishprice=" + s, a.addItemToPanel(o, 0),
					null != n.fishdialog && n.fishdialog.getComponent("fishlist-dialog").refreshCoin(playerManager.getObjData("Coin")),
					gameScript.refreshCoin());
					break
				}
			}
			gameScript.state = 0;
	}
