function skillsMember() {
  return {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node', 'Express'],
    getSkills: function() {
      return this.skills;
    }
  };
}