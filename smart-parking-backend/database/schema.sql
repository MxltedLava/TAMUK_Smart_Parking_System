CREATE TABLE authorized_vehicles (
    id SERIAL PRIMARY KEY,
    plate_number VARCHAR(20) UNIQUE NOT NULL
);

CREATE TABLE parking_logs (
    id SERIAL PRIMARY KEY,
    plate_number VARCHAR(20),
    status VARCHAR(20),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);