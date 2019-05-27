<?php

return [
    'namespace' => 'App\Admin',

    'enabled' => [
        'users-management' => true,
        'media-library' => true,
        'file-library' => false,
        'dashboard' => true,
        'search' => true,
        'block-editor' => false,
        'buckets' => false,
        'users-image' => true,
        'users-description' => false,
        'site-link' => false,
        'settings' => false,
        'activitylog' => true,
    ],

    'media_library' => [
        'disk' => 'libraries',
        'endpoint_type' => env('MEDIA_LIBRARY_ENDPOINT_TYPE', 's3'),
        'cascade_delete' => env('MEDIA_LIBRARY_CASCADE_DELETE', false),
        'local_path' => env('MEDIA_LIBRARY_LOCAL_PATH'),
        'image_service' => env(
            'MEDIA_LIBRARY_IMAGE_SERVICE',
            'A17\Twill\Services\MediaLibrary\Imgix'
        ),
        'acl' => env('MEDIA_LIBRARY_ACL', 'private'),
        'filesize_limit' => env('MEDIA_LIBRARY_FILESIZE_LIMIT', 50),
        'allowed_extensions' => ['svg', 'jpg', 'gif', 'png', 'jpeg'],
        'init_alt_text_from_filename' => true,
    ],
];
