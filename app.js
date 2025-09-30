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
    connectionStatus.textContent = "Connected";
    connectionStatus.className = "connection-indicator connected";
    userAddressP.textContent = userAddress.slice(0, 6) + '...' + userAddress.slice(-4);
    document.getElementById('userAddressContainer').classList.remove('hidden');
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
    statusMessage.className = `text-center text-sm p-4 rounded-xl shadow-sm ${isError ? 'status-error' : 'status-success'}`;
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
            <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14,2 14,8 20,8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10,9 9,9 8,9"></polyline>
                    </svg>
                </div>
                <h3 class="font-bold text-lg text-gray-900">Evidence #${id}</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-3">
                    <div>
                        <span class="text-sm font-medium text-gray-500">Case ID</span>
                        <p class="font-semibold text-gray-900">${caseId}</p>
                    </div>
                    <div>
                        <span class="text-sm font-medium text-gray-500">Timestamp</span>
                        <p class="font-semibold text-gray-900">${date}</p>
                    </div>
                </div>
                <div class="space-y-3">
                    <div>
                        <span class="text-sm font-medium text-gray-500">Uploaded By</span>
                        <p class="font-mono text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">${uploadedBy.slice(0, 6)}...${uploadedBy.slice(-4)}</p>
                    </div>
                    <div>
                        <span class="text-sm font-medium text-gray-500">IPFS File</span>
                        <a href="https://gateway.pinata.cloud/ipfs/${ipfsHash}" target="_blank" class="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                            View File
                        </a>
                    </div>
                </div>
                <div class="md:col-span-2 mt-2">
                    <span class="text-sm font-medium text-gray-500">Description</span>
                    <p class="mt-1 text-gray-900 leading-relaxed">${description}</p>
                </div>
            </div>
        `;
        showStatus("Evidence retrieved successfully.");
    } catch (error) {
        console.error("Error getting evidence:", error);
        evidenceDetailsDiv.innerHTML = `
            <div class="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-3 text-red-300">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                <p class="text-red-600 font-medium">Error: ${error.reason || error.message}</p>
            </div>
        `;
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
            connectionStatus.textContent = "Not Connected";
            connectionStatus.className = "connection-indicator disconnected";
            document.getElementById('userAddressContainer').classList.add('hidden');
        } else if (accounts[0] !== userAddress) {
            // This will automatically reload and re-check roles if you switch accounts
            window.location.reload();
        }
    });

    // Also reload if the network changes (e.g. from Ganache to Sepolia)
    window.ethereum.on('chainChanged', (_chainId) => window.location.reload());
}

