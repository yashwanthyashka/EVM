// --- STEP 1: Paste your Contract Address and ABI here ---
const contractAddress = "0x7E62c3c810628d1717E9B364490B99CD8fF7dA5a";
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "evidenceId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "string",
				"name": "caseId",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "uploadedBy",
				"type": "address"
			}
		],
		"name": "EvidenceAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "role",
				"type": "string"
			}
		],
		"name": "RoleGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "role",
				"type": "string"
			}
		],
		"name": "RoleRevoked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_caseId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ipfsHash",
				"type": "string"
			}
		],
		"name": "addEvidence",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "evidenceCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "evidenceLedger",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "caseId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "uploadedBy",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_evidenceId",
				"type": "uint256"
			}
		],
		"name": "getEvidence",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "grantCourtOfficialRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "grantPoliceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isCourtOfficial",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isPolice",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "revokeCourtOfficialRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "revokePoliceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
// --- End of configuration ---

// Check if MetaMask is installed
if (typeof window.ethereum === 'undefined') {
    alert('MetaMask is not installed. Please install it to use this dApp.');
}

// Global variables
let provider;
let signer;
let contract;
let userAddress;

// Initialize provider if MetaMask is available
if (typeof window.ethereum !== 'undefined') {
    provider = new ethers.providers.Web3Provider(window.ethereum);
}

// UI Elements
const connectButton = document.getElementById('connectButton');
const connectionStatus = document.getElementById('connectionStatus');
const userAddressP = document.getElementById('userAddress');
const dappInterface = document.getElementById('dappInterface');
const statusMessage = document.getElementById('statusMessage');
const addEvidenceButton = document.getElementById('addEvidenceButton');

// Sections
const ownerControls = document.getElementById('ownerControls');
const addEvidenceSection = document.getElementById('addEvidenceSection');
const getEvidenceSection = document.getElementById('getEvidenceSection');

// Event Listeners
connectButton.addEventListener('click', connectWallet);

async function connectWallet() {
    try {
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        userAddress = await signer.getAddress();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        updateUIOnConnect();
    } catch (error) {
        console.error("Error connecting wallet:", error);
        showStatus(`Error connecting wallet: ${error.message}`, true);
    }
}

async function updateUIOnConnect() {
    connectionStatus.textContent = "Status: Connected";
    userAddressP.textContent = `Your Address: ${userAddress}`;
    connectButton.textContent = "Connected";
    connectButton.disabled = true;
    dappInterface.classList.remove('hidden');
    checkUserRole();
}

async function checkUserRole() {
    if (!contract) return;
    try {
        const owner = await contract.owner();
        const isPolice = await contract.isPolice(userAddress);
        const isCourtOfficial = await contract.isCourtOfficial(userAddress);

        ownerControls.classList.add('hidden');
        addEvidenceSection.classList.add('hidden');
        getEvidenceSection.classList.add('hidden');

        if (userAddress.toLowerCase() === owner.toLowerCase()) {
            ownerControls.classList.remove('hidden');
        }
        if (isPolice) {
            addEvidenceSection.classList.remove('hidden');
        }
        if (isPolice || isCourtOfficial) {
            getEvidenceSection.classList.remove('hidden');
        }
    } catch (error) {
        console.error("Error checking user role:", error);
        showStatus("Could not verify user roles.", true);
    }
}

function showStatus(message, isError = false) {
    statusMessage.textContent = message;
    statusMessage.className = `mt-4 text-center text-sm p-3 rounded-lg ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`;
    if (!isError) {
        setTimeout(() => {
            statusMessage.textContent = '';
            statusMessage.className = '';
        }, 5000);
    }
}

// --- Pinata Upload Function ---
async function uploadToPinata(file) {
    const pinataApiKey = document.getElementById('pinataApiKey').value;
    const pinataSecretApiKey = document.getElementById('pinataSecretApiKey').value;

    if (!pinataApiKey || !pinataSecretApiKey) {
        throw new Error("Pinata API keys are missing.");
    }

    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    let data = new FormData();
    data.append('file', file);

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'pinata_api_key': pinataApiKey,
            'pinata_secret_api_key': pinataSecretApiKey
        },
        body: data
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Pinata upload failed: ${errorData.error.reason || response.statusText}`);
    }

    const responseData = await response.json();
    return responseData.IpfsHash;
}

// --- Contract Interaction Functions ---

// Role Management
document.getElementById('grantPoliceButton').addEventListener('click', () => grantRole('police'));
document.getElementById('grantCourtButton').addEventListener('click', () => grantRole('court'));
document.getElementById('revokePoliceButton').addEventListener('click', () => revokeRole('police'));
document.getElementById('revokeCourtButton').addEventListener('click', () => revokeRole('court'));

async function grantRole(role) {
    const addressInputId = role === 'police' ? 'grantPoliceAddress' : 'grantCourtAddress';
    const address = document.getElementById(addressInputId).value;
    if (!ethers.utils.isAddress(address)) {
        return showStatus("Invalid Ethereum address.", true);
    }
    try {
        showStatus(`Granting ${role} role...`);
        const tx = role === 'police' ?
            await contract.grantPoliceRole(address) :
            await contract.grantCourtOfficialRole(address);
        await tx.wait(); // Wait for the transaction to be confirmed
        showStatus(`Successfully granted ${role} role to ${address}`);
        document.getElementById(addressInputId).value = '';
        checkUserRole(); // <-- THE FIX: Re-check roles to update the UI
    } catch (error) {
        console.error(`Error granting ${role} role:`, error);
        showStatus(`Error: ${error.reason || error.message}`, true);
    }
}

async function revokeRole(role) {
    const addressInputId = role === 'police' ? 'revokePoliceAddress' : 'revokeCourtAddress';
    const address = document.getElementById(addressInputId).value;
    if (!ethers.utils.isAddress(address)) {
        return showStatus("Invalid Ethereum address.", true);
    }
    try {
        showStatus(`Revoking ${role} role...`);
        const tx = role === 'police' ?
            await contract.revokePoliceRole(address) :
            await contract.revokeCourtOfficialRole(address);
        await tx.wait(); // Wait for the transaction to be confirmed
        showStatus(`Successfully revoked ${role} role from ${address}`);
        document.getElementById(addressInputId).value = '';
        checkUserRole(); // <-- THE FIX: Re-check roles to update the UI
    } catch (error) {
        console.error(`Error revoking ${role} role:`, error);
        showStatus(`Error: ${error.reason || error.message}`, true);
    }
}

// Add Evidence
addEvidenceButton.addEventListener('click', async () => {
    const caseId = document.getElementById('caseId').value;
    const description = document.getElementById('evidenceDescription').value;
    const fileInput = document.getElementById('evidenceFile');
    const file = fileInput.files[0];

    if (!caseId || !description || !file) {
        return showStatus("Please fill in all fields and select a file.", true);
    }

    addEvidenceButton.disabled = true;
    addEvidenceButton.textContent = 'Uploading to IPFS...';

    try {
        // 1. Upload to Pinata
        showStatus("Uploading file to IPFS via Pinata...");
        const ipfsHash = await uploadToPinata(file);
        showStatus(`File uploaded to IPFS! Hash: ${ipfsHash}`);

        // 2. Add to Blockchain
        addEvidenceButton.textContent = 'Adding to Blockchain...';
        showStatus("Adding evidence metadata to the blockchain...");
        const tx = await contract.addEvidence(caseId, description, ipfsHash);
        await tx.wait();

        showStatus(`Evidence added successfully! Transaction hash: ${tx.hash}`);
        document.getElementById('caseId').value = '';
        document.getElementById('evidenceDescription').value = '';
        fileInput.value = '';

    } catch (error) {
        console.error("Error adding evidence:", error);
        showStatus(`Error: ${error.message}`, true);
    } finally {
        addEvidenceButton.disabled = false;
        addEvidenceButton.textContent = 'Upload to IPFS & Add to Blockchain';
    }
});

// Get Evidence
document.getElementById('getEvidenceButton').addEventListener('click', async () => {
    const evidenceId = document.getElementById('evidenceId').value;
    const evidenceDetailsDiv = document.getElementById('evidenceDetails');

    if (!evidenceId) {
        return showStatus("Please enter an Evidence ID.", true);
    }

    try {
        showStatus("Retrieving evidence from the blockchain...");
        const evidence = await contract.getEvidence(evidenceId);
        const [id, caseId, description, ipfsHash, uploadedBy, timestamp] = evidence;
        const date = new Date(timestamp * 1000).toLocaleString();

        evidenceDetailsDiv.innerHTML = `
            <h3 class="font-bold text-lg mb-2">Evidence Details (ID: ${id})</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <p><strong>Case ID:</strong> ${caseId}</p>
                <p><strong>Timestamp:</strong> ${date}</p>
                <p class="md:col-span-2"><strong>Uploaded By:</strong> ${uploadedBy}</p>
                <p class="md:col-span-2"><strong>Description:</strong> ${description}</p>
                <p class="md:col-span-2"><strong>IPFS Hash:</strong> <a href="https://gateway.pinata.cloud/ipfs/${ipfsHash}" target="_blank" class="text-blue-600 hover:underline">${ipfsHash}</a></p>
            </div>
        `;
        showStatus("Evidence retrieved successfully.");
    } catch (error) {
        console.error("Error getting evidence:", error);
        evidenceDetailsDiv.innerHTML = `<p class="text-red-500">Error: ${error.reason || error.message}</p>`;
        showStatus(`Error: ${error.reason || error.message}`, true);
    }
});

// Listen for account changes in MetaMask
if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
            console.log('Please connect to MetaMask.');
            dappInterface.classList.add('hidden');
            connectButton.disabled = false;
            connectButton.textContent = "Connect Wallet";
            connectionStatus.textContent = "Status: Not Connected";
            userAddressP.textContent = '';
        } else if (accounts[0] !== userAddress) {
            // This will automatically reload and re-check roles if you switch accounts
            window.location.reload();
        }
    });

    // Also reload if the network changes (e.g. from Ganache to Sepolia)
    window.ethereum.on('chainChanged', (_chainId) => window.location.reload());
}

