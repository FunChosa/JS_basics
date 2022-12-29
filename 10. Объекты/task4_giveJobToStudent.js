function giveJobToStudent(student, jobName){
    studentWithJob = {
        ...student,
        job: jobName
    }
    alert(`“Поздравляем! У студента ${studentWithJob.fullName} появилась новая работа! Теперь он ${studentWithJob.job}”`)
    return studentWithJob
    }
    
    const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
      }
     const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
     console.log('updatedStudent', updatedStudent); 