function handleMacroTask() {

}

function handleMicroTask(microTask) {

}

let macroTask;
let macroTaskQueue;


for (macroTask of macroTaskQueue) {

  // 1. Handle current MACRO-TASK

  handleMacroTask();


  // 2. Handle all MICRO-TASK

  let microTask;
  let microTaskQueue;
  for (microTask of microTaskQueue) {

    handleMicroTask(microTask);

  }

}
