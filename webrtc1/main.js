let localStream;
let remoteStream;
let peerConnection;

const  init = async()=>{
    localStream = await navigator.mediaDevices.getUserMedia({video:true,audio:false})

    document.getElementById('user-1').srcObject = localStream
    createOffer();
}
const createOffer = async()=>{
    peerConnection = new RTCPeerConnection()
    remoteStream = new MediaStream()
    document.getElementById('user-2').srcObject = remoteStream

    let offer = await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer)
    console.log(offer,'offer');
}
init()