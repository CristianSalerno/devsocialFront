import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ChatService } from "src/app/services/chat.service";
import { UsersService } from "src/app/services/users.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-chat-box",
  templateUrl: "./chat-box.component.html",
  styleUrls: ["./chat-box.component.css"]
})
export class ChatBoxComponent implements OnInit {
  chat: FormGroup;
  mainUser: any;
  comentsArr: any;
  routeActive: number;

  constructor(
    private chatService: ChatService,
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.chat = new FormGroup({
      coment: new FormControl("", [Validators.required])
    });
  }

  async ngOnInit() {
    this.mainUser = await this.userService.mainUserExist();
    this.activatedRoute.params.subscribe(params => {
      this.routeActive = parseInt(params.pId);
    });
    this.comentsArr = await this.chatService.getComents(this.routeActive);
  }

  onSubmit() {
    this.chat.value.idUser = this.mainUser.id;
    this.activatedRoute.params.subscribe(params => {
      this.chat.value.idTema = parseInt(params.pId);
    });

    this.chatService.leaveComent(this.chat.value).then(comentarios => {
      this.comentsArr = comentarios;
    });
  }
}
