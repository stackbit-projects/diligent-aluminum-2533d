/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 20/06/2021 - 00:41:49
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/06/2021
    * - Author          :
    * - Modification    :
**/
type FloppyDrive = {
    load: () => Promise<any>;
  };

  const floppy: FloppyDrive = { load: () => Promise.resolve({}) };

  // a pure function is one where the same input will always result in the same output.
  // functional core, imperative shell -> at some point all systems are not functional, this is any IO that might need to occur

  // composition, is a practice of combining functions to create a program. composition is achievable through making functions
  // that accept and return single inputs / outputs.
  // in linux, this is also a composed function. cat /tmp/someLog.txt | grep -i "Error" | wc -l
  export default () =>
    promptForNewDiskAndLoadData(`disk 1`)(floppy) // future could be CD-rom, or hdd
      .then(promptForNewDiskAndLoadData(`disk 2`))
      .then(promptForNewDiskAndLoadData(`disk 3`))
      .then(promptForNewDiskAndLoadData(`disk 4`))
      .then(promptForNewDiskAndLoadData(`disk 5`))
      .then(promptForNewDiskAndLoadData(`disk 6`))
      .then(promptForNewDiskAndLoadData(`disk 7`));

  // WHY NOT JUST have 2 params??? const promptForNewDiskAndLoadData = (drive: FloppyDrive, diskName:string) =>
  // Function Currying!!!!! Without it the function is not composable!!!!!!!!!!!!!
  // A monad is a common functional design pattern with a special goal - to reduce the amount of repeating code.
  // this function is  monad-ish. A monad chains operations in some specific order, to produce a result.
  // eg. array.filter(x=>x==a).map(x=>{...x}).reduce((memo,a)=>{},[]), weather array is empty or not, our code does not change.
  const promptForNewDiskAndLoadData = (diskName: string) => (
    drive: FloppyDrive
  ): Promise<FloppyDrive> =>
    promptUserForNewDisk(diskName)
      .then(loadDataFromDrive(drive)) // partial application
      .then(processFloppyData)
      .then(() => drive)
      .catch(abortProcess(`Failed to process data from disk ${diskName}`));

  // railroad programming / happy path
  const promptUserForNewDisk = (diskName: string): Promise<string> =>
    true
      ? Promise.resolve(`/mnt/disk/${diskName}`)
      : Promise.reject("User did not respond to prompt within allowable time.");

  // function curry
  const abortProcess = (error: string) => (ex: Error) => {
    throw new Error(`${error}. cause ${ex.toString()}`);
  };

  // function curry
  // const loadDataFromDrive = (driver: FloppyDrive, diskName: string): Promise<any> => {
  const loadDataFromDrive = (driver: FloppyDrive) => (
    diskName: string
  ): Promise<any> => {
    console.info(`loading disk ${diskName}`);
    return true ? driver.load() : Promise.reject("Disk is corrupt.");
  };

  const processFloppyData = (data: any): Promise<boolean> => {
    // ... loading logic here
    return !!data ? Promise.resolve(!!data) : Promise.reject("data is corrupt.");
  };
