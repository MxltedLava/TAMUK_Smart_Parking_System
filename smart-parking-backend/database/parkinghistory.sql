CREATE TABLE ParkingHistory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    license_plate TEXT NOT NULL,
    entry_time DATETIME NOT NULL,
    exit_time DATETIME,
    parking_space_id TEXT,
    fee REAL
);