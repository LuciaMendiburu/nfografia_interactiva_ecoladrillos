
/*==========================BLOQUE 1=================================== */
/*------------Esponja y mancha--------------------- */

class App {

  static init() {

    App.box_1 = document.getElementsByClassName('box_1')[0]

    App.box_1.addEventListener("dragstart", App.dragstart)
    App.box_1.addEventListener("dragend", App.dragend)

    const containers = document.getElementsByClassName('holder_1')

    for(const container of containers) {
      container.addEventListener("dragover", App.dragover)
      container.addEventListener("dragenter", App.dragenter)
      container.addEventListener("dragleave", App.dragleave)
      container.addEventListener("drop", App.drop)
    }
  } 
 
  static dragstart() {
    this.className += " held"
  
    setTimeout(()=>this.className="invisible", 0)
  }

  static dragend() {
    this.className = "box_1"
   
  }

  static dragover(e) {
    e.preventDefault()
  }

  static dragenter(e) {
    e.preventDefault()
    this.className += " hovered"
  }

  static dragleave() {
    this.className = "holder_1"
    
  }

  static drop() {
    this.className = "holder_1"

    /* esto es lo que hace desaparecer a la mancha despues del drop */
    this.className = "invisible"
    this.append(App.box_1)
  }

}


/*==========================BLOQUE 2=================================== */
/*------------Basura reciclabe--------------------- */

class App_2 {

  static init() {

    App_2.box_2 = document.getElementsByClassName('box_2')[0]

    App_2.box_2.addEventListener("dragstart", App_2.dragstart)
    App_2.box_2.addEventListener("dragend", App_2.dragend)

    const containers = document.getElementsByClassName('holder_2')

    for(const container of containers) {
      container.addEventListener("dragover", App_2.dragover)
      container.addEventListener("dragenter", App_2.dragenter)
      container.addEventListener("dragleave", App_2.dragleave)
      container.addEventListener("drop", App_2.drop)
    }
  } 
 
  static dragstart() {
    this.className += " held"
  
    setTimeout(()=>this.className="invisible", 0)
  }

  static dragend() {
    this.className = "box_2"
   
  }

  static dragover(e) {
    e.preventDefault()
  }

  static dragenter(e) {
    e.preventDefault()
    this.className += " hovered"
  }

  static dragleave() {
    this.className = "holder_2"
    
  }

  static drop() {
    this.className = "holder_2"

    /* esto es lo que hace desaparecer a la mancha despues del drop */
    
    this.append(App_2.box_2)
  }

}

/*------------Basura no reciclable--------------------- */

class App_3 {

  static init() {

    App_3.box_3 = document.getElementsByClassName('box_3')[0]

    App_3.box_3.addEventListener("dragstart", App_3.dragstart)
    App_3.box_3.addEventListener("dragend", App_3.dragend)

    const containers = document.getElementsByClassName('holder_3')

    for(const container of containers) {
      container.addEventListener("dragover", App_3.dragover)
      container.addEventListener("dragenter", App_3.dragenter)
      container.addEventListener("dragleave", App_3.dragleave)
      container.addEventListener("drop", App_3.drop)
    }
  } 
 
  static dragstart() {
    this.className += " held"
  
    setTimeout(()=>this.className="invisible", 0)
  }

  static dragend() {
    this.className = "box_3"
   
  }

  static dragover(e) {
    e.preventDefault()
  }

  static dragenter(e) {
    e.preventDefault()
    this.className += " hovered"
  }

  static dragleave() {
    this.className = "holder_3"
    
  }

  static drop() {
    this.className = "holder_3"

    /* esto es lo que hace desaparecer a la mancha despues del drop */
    
    this.append(App_3.box_3)
  }

}

/*==========================BLOQUE 2=================================== */
/*------------Basura reciclabe--------------------- */

class App_4 {

  static init() {

    App_4.box_4 = document.getElementsByClassName('box_4')[0]

    App_4.box_4.addEventListener("dragstart", App_4.dragstart)
    App_4.box_4.addEventListener("dragend", App_4.dragend)

    const containers = document.getElementsByClassName('holder_4')

    for(const container of containers) {
      container.addEventListener("dragover", App_4.dragover)
      container.addEventListener("dragenter", App_4.dragenter)
      container.addEventListener("dragleave", App_4.dragleave)
      container.addEventListener("drop", App_4.drop)
    }
  } 
 
  static dragstart() {
    this.className += " held"
  
    setTimeout(()=>this.className="invisible", 0)
  }

  static dragend() {
    this.className = "box_4"
   
  }

  static dragover(e) {
    e.preventDefault()
  }

  static dragenter(e) {
    e.preventDefault()
    this.className += " hovered"
  }

  static dragleave() {
    this.className = "holder_4"
    
  }

  static drop() {
    this.className = "holder_4"

    /* esto es lo que hace desaparecer a la mancha despues del drop */
    
    this.append(App_4.box_4)
  }

}















document.addEventListener("DOMContentLoaded", App.init)
document.addEventListener("DOMContentLoaded", App_2.init)
document.addEventListener("DOMContentLoaded", App_3.init)
document.addEventListener("DOMContentLoaded", App_4.init)