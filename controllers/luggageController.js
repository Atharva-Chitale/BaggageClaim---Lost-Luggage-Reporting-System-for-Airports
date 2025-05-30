const Luggage = require('../models/Luggage');

// Show all luggage requests (admin)
exports.getAllLuggage = async (req, res) => {
  const luggages = await Luggage.find({});
  res.render('admin', { luggages });
};

// Resolve luggage request
exports.resolveLuggage = async (req, res) => {
  await Luggage.findByIdAndUpdate(req.params.id, { status: 'Resolved' });
  res.redirect('/admin');
};

// Delete luggage request
exports.deleteLuggage = async (req, res) => {
  await Luggage.findByIdAndDelete(req.params.id);
  res.redirect('/admin');
};

// Show user's own requests
exports.getUserLuggage = async (req, res) => {
  const userLuggages = await Luggage.find({ user: req.userId });
  res.render('userDashboard', { luggages: userLuggages });
};

//post report
exports.post_report = async (req, res) => {
  const Luggage = require('../models/Luggage');
  if (req.body) {
    await Luggage.create({ ...req.body, user: req.userId, status: 'Pending' });
  }
  res.redirect(req.role === 'admin' ? '/admin' : '/userDashboard');
};

//get report
exports.get_report = (req, res) => {
  res.render('report'); // report.ejs or HTML must exist
};

//editpage_user
exports.editpage_user=async(req,res)=>{
  const id=req.params.id;
  try{
    const luggage=await Luggage.findById(id);
    if(!luggage){
      return res.status(404).send("Luggage not found");
    }
    res.render('edit_data',{luggage});
  }
  catch(err){
    res.status(500).send('Server Error');
  }
};

//update_userdata
exports.update_userdata=async(req,res)=>{
  const id = req.params.id;

  const { description, color, status, date } = req.body; // destructure form data

  try {
    const luggage = await Luggage.findById(id);
    if (!luggage) {
      return res.status(404).send("Luggage not found");
    }

    // Update the fields
    luggage.description = description;
    luggage.color = color;
    luggage.status = status;
    luggage.date = date; // Make sure date input is valid

    await luggage.save(); // Save the updated data

    res.redirect('/userDashboard'); // Use the correct route
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

//delete luggage data
exports.deletedata=async(req,res)=>{
  await Luggage.findByIdAndDelete(req.params.id);
  res.redirect('/userDashboard');
};