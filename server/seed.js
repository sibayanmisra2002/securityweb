const Criminal = require("./model/criminals.model");
const sequelize = require("./dbConnect");
const csv = require("csv-parser");
const fs = require("fs");
// Function to generate random date within a range
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function separateArrays(records) {
  const recordIDs = [];
  const recordDates = [];
  const names = [];
  const nativePlaces = [];
  const datesOfBirth = [];
  const details = [];
  const criminalRecords = [];
  const images = [];

  records.forEach((record) => {
    recordIDs.push(record["Record ID"]);
    recordDates.push(record["Record Date"]);
    names.push(record["Name"]);
    nativePlaces.push(record["Native Place"]);
    datesOfBirth.push(record["Date of Birth"]);
    details.push(record["Details"]);
    criminalRecords.push(record["Criminal Record"]);
    images.push(record["Image"]);
  });

  return {
    recordIDs,
    recordDates,
    names,
    nativePlaces,
    datesOfBirth,
    details,
    criminalRecords,
    images,
  };
}

// Function to generate dummy criminal data
function generateDummyCriminal(resArr) {
  const { names, nativePlaces, details, criminalRecords, recordDates } =
    separateArrays(resArr);

  const dummyCriminals = [];
  const numOfCriminals = resArr.length; // Assuming resArr.length is the desired number of objects

  for (let i = 0; i < numOfCriminals; i++) {
    dummyCriminals.push({
      name: names[i],
      record_date: recordDates[i],
      native_place: nativePlaces[i],
      criminal_record: criminalRecords[i],
      dob: randomDate(new Date(1950, 0, 1), new Date())
        .toISOString()
        .slice(0, 10),
      details: details[i],
    });
  }

  return dummyCriminals;
}

// Function to seed the database with dummy data
async function seedDatabase() {
  // Sync the model with the database
  await Criminal.sync({ force: true });

  const results = [];

  fs.createReadStream("Criminal Datasheet - Criminal Database.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      const dummyData = generateDummyCriminal(results);
      // Insert dummy data into the database
      await Criminal.bulkCreate(dummyData);
      console.log("Dummy data inserted successfully.");
      // Close the database connection
      await sequelize.close();
    });
}

seedDatabase();
