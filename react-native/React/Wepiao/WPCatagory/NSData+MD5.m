//
//  NSData+MD5.m
//  Pods
//
//  Created by 窦静轩 on 2017/1/9.
//
//

#import "NSData+MD5.h"
#import <CommonCrypto/CommonDigest.h>

#define CC_MD5_DIGEST_LENGTH 16



@implementation NSData(md5)
-(NSString*)md5
{
//    const char* original_str = (const char *)[self bytes];
//    unsigned char digist[CC_MD5_DIGEST_LENGTH]; //CC_MD5_DIGEST_LENGTH = 16
//    CC_MD5(original_str, (uint)strlen(original_str), digist);
//    NSMutableString* outPutStr = [NSMutableString stringWithCapacity:10];
//    for(int  i =0; i<CC_MD5_DIGEST_LENGTH;i++){
//        [outPutStr appendFormat:@"%02x",digist[i]];//小写x表示输出的是小写MD5，大写X表示输出的是大写MD5
//    }
//    
//    return [outPutStr lowercaseString];
//    
    
    
    if (self) {
        unsigned char digest[CC_MD5_DIGEST_LENGTH];
        CC_MD5(self.bytes, (CC_LONG)self.length, digest);
        
        NSMutableString *output = [NSMutableString stringWithCapacity:CC_MD5_DIGEST_LENGTH * 2];
        
        for(int i = 0; i < CC_MD5_DIGEST_LENGTH; i++)
        {
            [output appendFormat:@"%02x", digest[i]];
        }
        return [output lowercaseString];
    }
}
@end
