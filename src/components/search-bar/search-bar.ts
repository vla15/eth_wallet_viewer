import { Component, AfterViewInit } from '@angular/core';
import * as Web3 from 'web3';

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
web3.eth.defaultAccount = web3.eth.accounts[0];

@Component({
    selector: 'search-bar',
    templateUrl: 'search-bar.html'
})
export class SearchBarComponent implements AfterViewInit {
    private name: string;

    ngAfterViewInit() {
        // if (typeof web3 !== 'undefined') {
        //     web3 = new Web3(web3.currentProvider);
        // } else {
        // }
        console.log(web3.eth);
        let accounts = web3.eth.accounts;
        console.log(accounts);
        let contract = new web3.eth.Contract([
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_fName",
                        "type": "string"
                    },
                    {
                        "name": "_age",
                        "type": "uint256"
                    }
                ],
                "name": "setInstructor",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getInstructor",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    },
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ], '0x9fe3cd33109588c47c86ceb7e00076ede575331d')
        console.log(contract);

    }
}