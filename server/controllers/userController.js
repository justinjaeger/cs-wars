const db = require('../models/csWarsModels'); // (text, params, callback)

const userController = {};

// ========= DATABASE INFO ========= //
// TABLE: "users"
// COLUMNS: "firstName", "lastName", "cwUsername"

//======= GET USER ========//
userController.getUser = async (req, res, next) => {
  const {id} = req.params;
  try {
    console.log('try');
    let queryString = `
    SELECT *
    FROM users
    WHERE firstName = '${id}';
    `;

    const {rows} = await db.query(queryString);
    console.log(rows)
    res.locals.user = await rows[0];
    next();
  } catch (err) {
    next({
      log: 'Error thrown in get characters middleware',
    });
  }
};
/*
  =========== NOTE: =========
  You can find the SQL database structure in the assets folder. 
  Just create your own with the same table name and column names.
  SQL Database is just ONE table so what you see is everything.
*/

<<<<<<< HEAD
// //======= GET USERS ========//
userController.getUsers = async (req, res, next) => {

  try {
    let queryString = `
    SELECT *
    FROM users;
    `;

    const {rows} = await db.query(queryString);
    res.locals.users = await rows;
    next();
  } catch (err) {
    next({
      log: 'Error thrown in get characters middleware',
=======
//======= LOAD FROM FACEBOOK ID ========// 
userController.loadFromFacebookid = async (req, res, next) => {
  const { id } = req.params;

  try {
    // queryString is getting the codewars username
    let queryString = `
    SELECT cwusername
    FROM users
    WHERE facebookid = '${id}'
    `;

    const { rows } = await db.query(queryString);
    res.locals.cwuser = await rows[0];
    console.log('userController.loadFromFacebookId', res.locals.cwuser)
    next();
  } catch (err) {
    next({
      log: 'Error thrown in loadFromFacebookid middleware',
>>>>>>> master
    });
  }
};

<<<<<<< HEAD
// //======= CREATE USER ========//
userController.createUser = async (req, res, next) => {

  const { firstName, lastName, cwUsername } = req.body;
  const string = `
      INSERT INTO users
      VALUES ($1, $2, $3)
      RETURNING *
    `;
  const values = [firstName, lastName, cwUsername]; // can refactor this into VALUES

  try {
    const {rows} = await db.query(string, values);
    
    res.locals.userinfo = rows[0]
    
=======
//======= UPDATE USER ========//
userController.updateUser = async (req, res, next) => {
  const cwUsername = res.locals.user.username;
  const rank = res.locals.user.ranks.overall.name;
  const completed = res.locals.user.codeChallenges.totalCompleted;
  try {
    let queryString = `
    UPDATE users
    SET rank='${rank}', completed=${completed}
    WHERE cwusername='${cwUsername}'
    RETURNING *;
    `;

    const { rows } = await db.query(queryString);
    res.locals.userSQL = await rows[0];
    console.log('userController.updateUser', res.locals.userSQL);
    next();
  } catch (err) {
    next({
      log: 'Error thrown in updateUser middleware',
    });
  }
};

//======= GET USERS ========//
userController.getUsers = async (req, res, next) => {
  try {
    let queryString = `
    SELECT *
    FROM users
    ORDER BY completed DESC;
    `;

    const { rows } = await db.query(queryString);
    res.locals.cwusernames = await rows;
    console.log('userController.getUsers', res.locals.cwusernames);
    next();
  } catch (err) {
    next({
      log: 'Error thrown in getUsers middleware',
    });
  }
};

// //======= CREATE USER ========//
userController.createUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      cwUsername,
      rank,
      completed,
      facebookid,
    } = res.locals.createuser;
    const string = `
        INSERT INTO users (firstName, lastName, cwUsername, rank, completed, facebookid)
        VALUES ('${firstName}', '${lastName}', '${cwUsername}', '${rank}', ${completed}, '${facebookid}')
        RETURNING *
      `;

    const { rows } = await db.query(string);
    res.locals.userinfo = rows[0];
    console.log('usercontrollerCREATEUSER', res.locals.userinfo);
>>>>>>> master
    next();
  } catch (err) {
    next(err);
  }
};

<<<<<<< HEAD
=======
// WE DID NOT USE THIS BECAUSE ELEPHANTSQL DOES NOT ALLOW US TO MAKE TOO MANY QUERIES AT THE SAME TIME!
//======= UPDATE USERS ========// NOT BEING USED -- gets codewars data from the API
// userController.updateUsers = async (req, res, next) => {
//   try {
//     const updatedArr = await Promise.all(
//       res.locals.cwusersdata.map((userdata) => {
//         if (userdata.username) {
//           const csUsername = userdata.username;
//           const rank = userdata.ranks.overall.name;
//           const completed = userdata.codeChallenges.totalCompleted;
//           let queryString = `
//           UPDATE users 
//           SET  rank='${rank}', completed=${completed}
//           WHERE cwUsername='${csUsername}'
//           RETURNING *;
//           `;
//           const { rows } = db.query(queryString);
//           console.log(rows);
//           return rows[0];
//         } else return;
//       })
//     );

//     res.locals.SQLusers = await updatedArr;
//     next();
//   } catch (err) {
//     next({
//       log: err,
//     });
//   }
// };

>>>>>>> master
module.exports = userController;
