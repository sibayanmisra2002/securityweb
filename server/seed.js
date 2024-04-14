const Criminal = require("./model/criminals.model");
const sequelize = require("./dbConnect");

// Function to generate random date within a range
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Function to generate dummy criminal data
function generateDummyCriminal() {
  const names = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Brown",
    "William Davis",
    "Olivia Martinez",
    "James Wilson",
    "Emma Anderson",
    "Alexander Taylor",
    "Sophia Thomas",
  ];
  const places = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];
  const records = [
    "Theft",
    "Assault",
    "Drug trafficking",
    "Robbery",
    "Burglary",
    "Fraud",
    "Homicide",
    "Kidnapping",
    "Arson",
    "Extortion",
  ];
  const details = [
    "Armed and dangerous",
    "Approach with caution",
    "Known to be violent",
    "Wanted for multiple felonies",
    "May be armed",
  ];

  return {
    name: names[Math.floor(Math.random() * names.length)],
    record_date: randomDate(new Date(2010, 0, 1), new Date())
      .toISOString()
      .slice(0, 10),
    native_place: places[Math.floor(Math.random() * places.length)],
    criminal_record: records[Math.floor(Math.random() * records.length)],
    dob: randomDate(new Date(1950, 0, 1), new Date())
      .toISOString()
      .slice(0, 10),
    details: details[Math.floor(Math.random() * details.length)],
  };
}

// Function to seed the database with dummy data
async function seedDatabase() {
  // Sync the model with the database
  await Criminal.sync({ force: true });

  // Create 10 dummy criminal records
  const dummyData = Array.from({ length: 10 }, generateDummyCriminal);

  // Insert dummy data into the database
  await Criminal.bulkCreate(dummyData);

  console.log("Dummy data inserted successfully.");
  // Close the database connection
  await sequelize.close();
}

seedDatabase();
