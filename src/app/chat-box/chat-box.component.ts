import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ChatService } from "services/chat.service";
import { UsersService } from "services/users.service";
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

  constructor(
    private chatService: ChatService,
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.chat = new FormGroup({
      coment: new FormControl("", [Validators.required])
    });
    this.comentsArr = [];
  }

  async ngOnInit() {
    this.mainUser = await this.userService.mainUserExist();
    this.comentsArr = await this.chatService.getComents();
  }

  onSubmit() {
    this.chat.value.idUser = this.mainUser.id;
    this.activatedRoute.params.subscribe(params => {
      this.chat.value.idTema = parseInt(params.pId);
    });
    this.chatService.leaveComent(this.chat.value);
  }
}
