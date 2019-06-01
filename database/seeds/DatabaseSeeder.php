<?php

use App\Models\Ad;
use App\Models\Article;
use App\Models\Occupation;
use A17\Twill\Models\Media;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use App\Models\Author as Author;
use A17\Twill\Models\User as TwillUser;
use App\Models\Translations\ArticleTranslation;
use App\Models\Translations\OccupationTranslation;

class DatabaseSeeder extends Seeder
{
    const USERS = [
        [
            'name' => 'Antonio Carlos Ribeiro',
            'email' => 'acr@antoniocarlosribeiro.com',
        ],
        [
            'name' => 'Luis Lavena',
            'email' => 'luis@area17.com',
        ],
        [
            'name' => 'Quentin Renard',
            'email' => 'quentin@area17.com',
        ],
    ];

    const LANGUAGES = ['fr', 'en', 'pt', 'es'];

    const ARTICLES = [
        [
            'title' => 'Find the Perfect Dress for Special Occasions',
            'image' => 'phoenix.jpg',
        ],
        [
            'title' => 'Attracting Butterflies to Your Garden',
            'image' => 'batman.jpg',
        ],
        [
            'title' => 'The Absolute Beginner\'s Guide to Running',
            'image' => 'daredevil.jpg',
        ],
        ['title' => 'DIY Live Edge Coffee Table', 'image' => 'hulk.jpg'],
        [
            'title' => 'Best Free Attractions in New York City',
            'image' => 'spiderman.jpg',
        ],
        [
            'title' => 'Italian Sausage and Bell Pepper Pizza',
            'image' => 'squirell-girl.jpg',
        ],
        [
            'title' => '10 Mid Century Moden Items for Your Home',
            'image' => 'wolverine.jpg',
        ],
    ];

    const IMAGES = [
        [
            'filename' => 'sanders.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/sanders.jpg',
            'caption' => 'Sanders',
            'height' => 170,
            'width' => 163,
        ],
        [
            'filename' => 'advert.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/advert.jpg',
            'caption' => 'Advert',
            'height' => 250,
            'width' => 300,
        ],
        [
            'filename' => 'saga.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/saga.jpg',
            'caption' => 'Saga',
            'height' => 332,
            'width' => 540,
        ],
        [
            'filename' => 'phoenix.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/phoenix.jpg',
            'caption' => 'Phoenix',
            'height' => 961,
            'width' => 736,
        ],
        [
            'filename' => 'squirell-girl.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/squirell-girl.jpg',
            'caption' => 'Squirell Girl',
            'height' => 800,
            'width' => 1600,
        ],
        [
            'filename' => 'fantastic.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/fantastic.jpg',
            'caption' => 'Fantastic',
            'height' => 720,
            'width' => 1280,
        ],
        [
            'filename' => 'vulture.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/vulture.jpg',
            'caption' => 'Vulture',
            'height' => 540,
            'width' => 960,
        ],
        [
            'filename' => 'hulk.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/hulk.jpg',
            'caption' => 'Hulk',
            'height' => 1004,
            'width' => 1920,
        ],
        [
            'filename' => 'batman.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/batman.jpg',
            'caption' => 'Batman',
            'height' => 1080,
            'width' => 1920,
        ],
        [
            'filename' => 'daredevil.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/daredevil.jpg',
            'caption' => 'Daredevil',
            'height' => 316,
            'width' => 600,
        ],
        [
            'filename' => 'wolverine-face.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/wolverine-face.jpg',
            'caption' => 'Wolverine Face',
            'height' => 720,
            'width' => 1280,
        ],
        [
            'filename' => 'wolverine.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/wolverine.jpg',
            'caption' => 'Wolverine',
            'height' => 1080,
            'width' => 1920,
        ],
        [
            'filename' => 'spiderman.jpg',
            'uuid' => 'c4c3d5ea-5834-49a0-a9b9-3f95727d36ee/spiderman.jpg',
            'caption' => 'Spiderman',
            'height' => 1078,
            'width' => 1600,
        ],
    ];

    public function run()
    {
        $this->seedUsers();

        $this->seedOcupations();

        $this->seedMedias();

        $this->seedAds();

        $this->seedAuthors();

        $this->seedArticles();
    }

    private function seedAds()
    {
        $ad = factory(Ad::class)->create([
            'title' => 'Starbucks',
            'url' => 'https://starbucks.com',
        ]);

        factory(Mediable::class)->create([
            'mediable_id' => $ad->id,
            'mediable_type' => Ad::class,
            'media_id' => Media::where('filename', 'advert.jpg')->first()->id,
        ]);
    }

    private function seedArticles()
    {
        collect(static::ARTICLES)->each(function ($article) {
            $model = factory(Article::class)->create();

            collect(static::LANGUAGES)->each(function ($locale) use (
                $model,
                $article
            ) {
                factory(ArticleTranslation::class)->create([
                    'article_id' => $model->id,
                    'locale' => $locale,
                    'title' =>
                        $article['title'] . ' (' . strtoupper($locale) . ')',
                ]);
            });

            collect([
                ['crop' => 'default', 'ratio' => 'landscape'],
                ['crop' => 'portrait', 'ratio' => 'portrait'],
                ['crop' => 'mobile', 'ratio' => 'mobile'],
            ])->each(function ($types) use ($model, $article) {
                factory(Mediable::class)->create([
                    'mediable_id' => $model->id,
                    'mediable_type' => Article::class,
                    'media_id' => Media::where(
                        'filename',
                        $article['image']
                    )->first()->id,
                    'ratio' => $types['ratio'],
                    'crop' => $types['crop'],
                ]);
            });
        });
    }

    private function seedAuthors()
    {
        $author = factory(Author::class)->create();

        factory(Mediable::class)->create([
            'mediable_id' => $author->id,
            'mediable_type' => Author::class,
            'media_id' => Media::where('filename', 'sanders.jpg')->first()->id,
            'role' => 'avatar',
        ]);

        foreach (range(1, 5) as $counter) {
            $author = factory(Author::class)->create();

            factory(Mediable::class)->create([
                'mediable_id' => $author->id,
                'mediable_type' => Author::class,
                'media_id' => Media::where(
                    'filename',
                    collect(static::IMAGES)->random()['filename']
                )->first()->id,
                'role' => 'avatar',
            ]);
        }
    }

    private function seedMedias()
    {
        collect(static::IMAGES)->each(function ($file) {
            factory(Media::class)->create($file);
        });
    }

    private function seedOcupations()
    {
        foreach (range(1, 5) as $counter) {
            $occupation = factory(Occupation::class)->create();

            collect(static::LANGUAGES)->each(function ($locale) use (
                $occupation
            ) {
                factory(OccupationTranslation::class)->create([
                    'occupation_id' => $occupation->id,
                    'locale' => $locale,
                    'title' =>
                        app(Faker::class)->name .
                        ' Expert - ' .
                        strtoupper($locale),
                ]);
            });
        }
    }

    private function seedUsers()
    {
        collect(static::USERS)->each(function ($user) {
            factory(TwillUser::class)->create([
                'name' => $user['name'],
                'email' => $user['email'],
                'role' => 'SUPERADMIN',
                'password' => bcrypt(env('TEST_PASSWORD', 'secret')),
            ]);
        });
    }
}
