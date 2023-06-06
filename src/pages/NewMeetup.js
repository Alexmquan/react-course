import NewMeetupForm from "../components/meetups/NewMeetupForm.js";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch();
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
