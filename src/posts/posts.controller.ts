import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // @Post('addPost')
  // async addPost(@Body() createPostDto: CreatePostDto) {
  // }

  // @Get('allPosts')
  // async getAllPosts() {
  //   try {
  //     const posts = await this.postsService.findAll();
  //     return posts;
  //   } catch (err) {
  //     console.error(err);
  //     return { error: 'Ошибка сервера: ' + err.message };
  //   }
  // }

  // @Get('myPosts')
  // // @UseGuards(JwtAuthGuard)
  // async getMyPosts(id: number) {
  //   try {
  //     const myPosts = await this.postsService.findOne(id);
  //     return myPosts;
  //   } catch (err) {
  //     console.error(err);
  //     return { error: 'Ошибка сервера: ' + err.message };
  //   }
  // }

  // @Get('post/:id')
  // async getPostById(@Param('id') id: number) {
  //   try {
  //     return await this.postsService.findOne(+id);
  //   } catch (err) {
  //     console.error(err);
  //     return { error: 'Ошибка сервера: ' + err.message };
  //   }
  // }
}
